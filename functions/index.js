const functions = require('firebase-functions')

exports.authUserCreated = functions.auth.user().onCreate((user) => {
	return admin
		.firestore()
		.collection('users')
		.doc(user.uid)
		.set({
			email: user.email,
			upvotedOn: [],
		})
})

exports.authUserDeleted = functions.auth.user().onDelete((user) => {
	const doc = admin
		.firestore()
		.collection('users')
		.doc(user.uid)
	return doc.delete()
})

exports.addRequest = functions.https.onCall((data, context) => {
	if (!context.auth) {
		throw new functions.https.HttpsError('unauthenticated', 'Only authenticated users can add requests')
	}
	if (data.title.length > 30) {
		throw new functions.https.HttpsError('invalid-argument', 'Request must be no more than 30 characters long')
	}
	return admin
		.firestore()
		.collection('requests')
		.add({
			title: data.text,
			upvotes: 0,
		})
})

exports.upvote = functions.https.onCall(async (data, context) => {
	if (!context.auth) {
		throw new functions.https.HttpsError('unauthenticated', 'Only authenticated users can vote up requests')
	}
	const user = admin
		.firestore()
		.collection('users')
		.doc(context.auth.uid)
	const request = admin
		.firestore()
		.collection('requests')
		.doc(data.id)
	const doc = await user.get()
	if (doc.data().upvotedOn.includes(data.id)) {
		throw new functions.https.HttpsError('failed-precondition', 'You can only vote something up once')
	}
	await user.update({ upvotedOn: [...doc.data().upvotedOn, data.id] })
	return request.update({ upvotes: admin.firestore.FieldValue.increment(1) })
})

exports.logActivities = functions.firestore.document('/{collection}/{id}').onCreate((snap, context) => {
	const activities = admin.firestore().collection('activities')
	const collection = context.params.collection
	if (collection === 'requests') {
		return activities.add({ text: 'a new tutorial request was added' })
	}
	if (collection === 'users') {
		return activities.add({ text: 'a new user signed up' })
	}
	return null
})

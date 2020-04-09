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

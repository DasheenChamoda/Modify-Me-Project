
import 'package:firebase_auth/firebase_auth.dart';

class FirebaseAuthService{

  final FirebaseAuth firebaseAuth = FirebaseAuth.instance;

  Future<Map<String, dynamic>> signUpWithEmailAndPassword(String email, String password) async {

    User? user;
    String message;

    try{
      UserCredential credential = await firebaseAuth.createUserWithEmailAndPassword(email: email, password: password);
      user = credential.user;
      message = "account created successfully";

    } catch(e) {
      user = null;
      message = e.toString();
    }
    return {"user": user, "message": message};
  }

  Future<Map<String, dynamic>> signInWithEmailAndPassword(String email, String password) async {

    User? user;
    String message;

    try{
      UserCredential credential = await firebaseAuth.signInWithEmailAndPassword(email: email, password: password);
      user = credential.user;
      message = "successfully logged in";
    } on FirebaseAuthException catch(e) {
      user = null;
      message = e.code.toString();
    }
    return {"user": user, "message": message};
  }

}
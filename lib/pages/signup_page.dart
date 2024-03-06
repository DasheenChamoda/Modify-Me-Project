import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:modify_me/firebase_auth/firebase_auth_service.dart';
import 'package:modify_me/utils/validation_utils.dart';

import 'login_page.dart';

class SignUpPage extends StatefulWidget {
  const SignUpPage({super.key});

  @override
  State<SignUpPage> createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {

  final FirebaseAuthService authService = FirebaseAuthService();

  final signUpFormKey = GlobalKey<FormState>();
  String? email;
  String? password;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const BackButton(),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(12),
          child: Form(
            key: signUpFormKey,
            child: Padding(
              padding: const EdgeInsets.all(28),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Image(image: AssetImage("assets/images/ModifyMe_logo.png"),),
                  const SizedBox(height: 32,),
                  const Align(
                    alignment: Alignment.centerLeft,
                    child: Text("Create Account", style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),),
                  ),
                  const Align(
                    alignment: Alignment.centerLeft,
                    child: Text("Create a new account", style: TextStyle(fontSize: 16, color: Colors.grey),),
                  ),
                  const SizedBox(height: 12,),
                  TextFormField(
                    decoration: const InputDecoration(label: Text("Email")),
                    validator: ValidationUtils.validateEmail,
                    onSaved: (value) => email = value,
                  ),
                  const SizedBox(height: 20,),
                  TextFormField(
                    decoration: const InputDecoration(label: Text("Password")),
                    validator: ValidationUtils.validatePassword,
                    onSaved: (value) => password = value,
                  ),
                  const SizedBox(height: 20,),
                  Align(
                    alignment: Alignment.centerRight,
                    child: FilledButton(
                        onPressed: _signup,
                        child: const Text("SIGN UP", style: TextStyle(color: Colors.black),)),
                  ),
                  const SizedBox(height: 24,),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text("Already have an account? "),
                      InkWell(
                        child: Text("SignIn", style: TextStyle(color: Theme.of(context).primaryColor),),
                        onTap: () {
                          Navigator.pop(context);
                        },
                      )
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  void _signup() async {

    final form = signUpFormKey.currentState;

    if (form != null && form.validate()) {
      form.save();

      try{
        Map<String, dynamic> response = await authService.signUpWithEmailAndPassword(email!, password!);
        User? user = response['user'];
        String message = response['message'];

        if(user != null) {
          print(message);
          Navigator.push(context, MaterialPageRoute(builder: (context) => const LogInPage()));
        } else {
          ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
          print(message);
        }

      } catch(e) {
        print(e);
      }
    }

  }
}

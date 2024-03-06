import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:modify_me/pages/signup_page.dart';
import 'package:modify_me/pages/vehicle_type_page.dart';
import 'package:modify_me/utils/validation_utils.dart';

import '../firebase_auth/firebase_auth_service.dart';

class LogInPage extends StatefulWidget {
  const LogInPage({super.key});

  @override
  State<LogInPage> createState() => _LogInPageState();
}

class _LogInPageState extends State<LogInPage> {

  final FirebaseAuthService authService = FirebaseAuthService();

  final logInFormKey = GlobalKey<FormState>();
  String? email;
  String? password;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(12),
          child: Form(
            key: logInFormKey,
            child: Padding(
              padding: const EdgeInsets.all(28),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const SizedBox(height: 80,),
                  const Image(image: AssetImage("assets/images/ModifyMe_logo.png"),),
                  const SizedBox(height: 32,),
                  const Align(
                    alignment: Alignment.centerLeft,
                      child: Text("LOGIN", style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),),
                  ),
                  const Align(
                    alignment: Alignment.centerLeft,
                    child: Text("Please sign in to continue", style: TextStyle(fontSize: 16, color: Colors.grey),),
                  ),
                  const SizedBox(height: 12,),
                  TextFormField(
                    validator: ValidationUtils.validateEmail,
                    decoration: const InputDecoration(label: Text("Email")),
                    onSaved: (value) => email = value,
                  ),
                  const SizedBox(height: 20,),
                  TextFormField(
                    validator: ValidationUtils.validatePassword,
                    obscureText: true,
                    decoration: const InputDecoration(label: Text("Password")),
                    onSaved: (value) => password = value,
                  ),
                  const SizedBox(height: 20,),
                  Align(
                    alignment: Alignment.centerRight,
                    child: FilledButton(
                        onPressed: _login,
                        child: const Text("LOGIN", style: TextStyle(color: Colors.black),),),
                  ),
                  const SizedBox(height: 24,),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text("Don't have an account? "),
                      InkWell(
                        child: Text("SignUp", style: TextStyle(color: Theme.of(context).primaryColor),),
                        onTap: () {
                          Navigator.push(context, MaterialPageRoute(builder: (context) => const SignUpPage()));
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

  void _login() async {

    final form = logInFormKey.currentState;

    if (form != null && form.validate()) {
      form.save();

      try{
        Map<String, dynamic> response = await authService.signInWithEmailAndPassword(email!, password!);
        User? user = response['user'];
        String message = response['message'];

        if(user != null) {
          ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
          print(message);
          Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const VehicleTypePage()));
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

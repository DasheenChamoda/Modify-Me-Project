import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:modify_me/pages/login_page.dart';
import 'package:modify_me/pages/signup_page.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: FirebaseOptions(apiKey: 'AIzaSyBZBEilMxFVy65iPgzd8BCRdpA2PvfOvxM',appId: '1:897641827502:android:3a2671a7b09dcc247df13f',projectId: 'modifyme-75acf', messagingSenderId: '897641827502'));
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Modify Me',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
            primary: const Color(0xFFFFCC00),
            seedColor: const Color(0xFF3E1EB1),
        ),
        useMaterial3: true,
      ),
      home: const LogInPage(),
    );
  }
}

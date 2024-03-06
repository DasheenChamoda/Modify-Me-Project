import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'login_page.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget{

  final String title;
  final bool autoLeading;

  const CustomAppBar({
    super.key,
    required this.title,
    required this.autoLeading
  });

  @override
  Widget build(BuildContext context) {
    return  AppBar(
      automaticallyImplyLeading: autoLeading,
      backgroundColor: Theme.of(context).primaryColor,
      title: Text(title),
      actions: [
        IconButton(
          onPressed: () {
            FirebaseAuth.instance.signOut();
            Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const LogInPage()));
          },
          icon: const Icon(Icons.logout_outlined, color: Colors.black,),
        ),
      ],
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(60);
}

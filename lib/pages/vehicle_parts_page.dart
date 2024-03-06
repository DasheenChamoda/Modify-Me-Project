import 'dart:math';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:modify_me/pages/ar_camera_page.dart';
import 'package:modify_me/pages/custom_app_bar.dart';

class VehiclePartsPage extends StatefulWidget {
  final String type;
  const VehiclePartsPage({super.key, required this.type});

  @override
  State<VehiclePartsPage> createState() => _VehiclePartsPageState();
}

class _VehiclePartsPageState extends State<VehiclePartsPage> {

  Random random = Random();

  var alw_list = ["assets/images/alw_1", "assets/images/alw_2", "assets/images/alw_3", "assets/images/alw_1", "assets/images/alw_2"];
  var sp_list = ["assets/images/sp_1", "assets/images/sp_2", "assets/images/sp_3", "assets/images/sp_1", "assets/images/sp_2"];
  var fb_list = ["assets/images/fb_1", "assets/images/fb_2", "assets/images/fb_3", "assets/images/fb_1", "assets/images/fb_2"];
  var rb_list = ["assets/images/rb_1", "assets/images/rb_2", "assets/images/rb_3", "assets/images/rb_1", "assets/images/rb_2"];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title:'Select Item', autoLeading: true,),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 20,),
            Padding(
              padding: const EdgeInsets.all(12),
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    SizedBox(
                      height: 100,
                      width: 200,
                        child: Image(image: AssetImage(widget.type == "sedan" ? "assets/images/sedan.png" : "assets/images/hatchback.png"), fit: BoxFit.fitWidth,),
                    ),
                    const SizedBox(width: 20,),
                    Text(widget.type == "sedan" ? "Sedan" : "Hatchback", style: const TextStyle(fontSize: 24),),
                    const SizedBox(width: 28,),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 12,),
            const Padding(
              padding: EdgeInsets.all(12),
              child: Text("Alloy Wheel", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),),
            ),
            Container(
              height: 160,
              color: Colors.grey,
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    const SizedBox(width: 4,),
                    ...List.generate(5, (index) => InkWell(
                      onTap: (){_handleSelectedItem(alw_list[index]);},
                      child: Card(
                        child: Container(
                          height: 140,
                          width: 140,
                          child: Image(
                            image: AssetImage("${alw_list[index]}.png"),
                          ),
                        ),
                      ),
                    ),),
                    const SizedBox(width: 4,),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 12,),
            const Padding(
              padding: EdgeInsets.all(12),
              child: Text("Spoilers", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),),
            ),
            Container(
              height: 160,
              color: Colors.grey,
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    const SizedBox(width: 4,),
                    ...List.generate(5, (index) => InkWell(
                      onTap: (){_handleSelectedItem(sp_list[index]);},
                      child: Card(
                        child: Container(
                          height: 140,
                          width: 140,
                          child: Image(
                            image: AssetImage("${sp_list[index]}.png"),
                          ),
                        ),
                      ),
                    ),),
                    const SizedBox(width: 4,),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 12,),
            const Padding(
              padding: EdgeInsets.all(12),
              child: Text("Front Bumpers", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),),
            ),
            Container(
              height: 160,
              color: Colors.grey,
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    const SizedBox(width: 4,),
                    ...List.generate(5, (index) => InkWell(
                      onTap: (){_handleSelectedItem(fb_list[index]);},
                      child: Card(
                        child: Container(
                          height: 140,
                          width: 140,
                          child: Image(
                            image: AssetImage("${fb_list[index]}.png"),
                          ),
                        ),
                      ),
                    ),),
                    const SizedBox(width: 4,),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 12,),
            const Padding(
              padding: EdgeInsets.all(12),
              child: Text("Rear Bumpers", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),),
            ),
            Container(
              height: 160,
              color: Colors.grey,
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    const SizedBox(width: 4,),
                    ...List.generate(5, (index) => InkWell(
                      onTap: (){_handleSelectedItem(rb_list[index]);},
                      child: Card(
                        child: Container(
                          height: 140,
                          width: 140,
                          child: Image(
                            image: AssetImage("${rb_list[index]}.png"),
                          ),
                        ),
                      ),
                    ),),
                    const SizedBox(width: 4,),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 60,)
          ],
        ),
      ),
    );
  }

  _handleSelectedItem(String item){
    showDialog(
        context: context,
        builder: (context) => AlertDialog(
          content: SizedBox(
            height: 360,
            width: 420,
            child: Column(
              children: [
                Image(image: AssetImage("$item.png"), height: 200, width: 200,),
                const SingleChildScrollView(
                    child: Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat velit a mattis sodales. Vestibulum aliquam tortor a semper aliquam. In sit amet erat ut nisl viverra dictum.")),
                const SizedBox(height: 12,),
                FilledButton(
                    onPressed: _handleArFunction,
                    child: const Text("Try Out", style: TextStyle(color: Colors.black),),
                ),
              ],
            ),
          ),
        ));
  }

  _handleArFunction() {
    Navigator.push(context, MaterialPageRoute(builder: (context) => const ARCameraPage(),));
  }
}

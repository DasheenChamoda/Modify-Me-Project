import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:modify_me/pages/vehicle_parts_page.dart';

import 'custom_app_bar.dart';

class VehicleTypePage extends StatefulWidget {
  const VehicleTypePage({super.key});

  @override
  State<VehicleTypePage> createState() => _VehicleTypePageState();
}

class _VehicleTypePageState extends State<VehicleTypePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(title: 'Select Type', autoLeading: false,),
      body: SingleChildScrollView(
        child: Align(
          alignment: Alignment.center,
          child: Column(
            children: [
              const SizedBox(height: 80,),
              const Text("Please select your vehicle type", style: TextStyle(fontSize: 20),),
              const SizedBox(height: 28,),
              InkWell(
                onTap: (){_handleSelectedType("sedan");},
                child: Card(
                  surfaceTintColor: Theme.of(context).primaryColor,
                  child: Container(
                    width: 200,
                    padding: const EdgeInsets.all(12),
                    child: const Column(
                      children: [
                        Image(
                          image: AssetImage("assets/images/sedan.png"),
                          height: 60,
                        ),
                        Text("Sedan", style: TextStyle(fontWeight: FontWeight.bold),),
                      ],
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 28,),
              InkWell(
                onTap: (){_handleSelectedType("hatchback");},
                child: Card(
                  surfaceTintColor: Theme.of(context).primaryColor,
                  child: Container(
                    width: 200,
                    padding: const EdgeInsets.all(12),
                    child: const Column(
                      children: [
                        Image(
                          image: AssetImage("assets/images/hatchback.png"),
                          height: 60,
                        ),
                        Text("Hatchback", style: TextStyle(fontWeight: FontWeight.bold),),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  _handleSelectedType(String type){
    Navigator.push(context, MaterialPageRoute(builder: (context) => VehiclePartsPage(type: type,),));
  }
}

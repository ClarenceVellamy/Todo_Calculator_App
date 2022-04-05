import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { vw, vh } from "react-native-expo-viewport-units"

export default function Calculator() {

  const [results, setresults] = useState("");
  const [opText, setOpText] = useState("");

  const buttonClick = (num) => {
    if (num == '=') {
      return setOpText(eval(results));
    } 
    setresults(results + num);
  };

  const operationClick = (operation) => {
    let operations = ["DEL", "+", "-", "*", "/"];

    if (operation == "DEL") {
      return setresults(
        results.toString().substring(0, results.length - 1)
      );
    }
    if (operation == "AC") {
      setresults("");
      setOpText(0);
      return;
    }
    if (operations.includes(results.toString().split("").pop())) return;
    setresults(results + operation);
  };

  return (
    <View style={style.container}>

      <View style={style.divResult}>
        <Text style={style.textResult}>{opText}</Text>
      </View>

      <View style={style.divOp}>
        <Text style={style.textOp}>{results}</Text>
      </View>

      <View style={style.divBtn}>
        <TouchableOpacity style={style.btn} onPress={() => operationClick('AC')}>
          <Text style={{color : '#ed802e', fontWeight: 'bold'}}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => operationClick('DEL')}>
          <Text style={{color : '#ed802e', fontWeight: 'bold'}}>DEL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => operationClick('/')}>
          <Text style={{color : '#ed802e', fontWeight: 'bold'}}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => operationClick('+')}>
          <Text style={{color : '#ed802e', fontWeight: 'bold'}}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick(1)}>
          <Text style={{color : 'white', fontWeight: 'bold'}}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick(2)}>
          <Text style={{color : 'white', fontWeight: 'bold'}}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick(3)}>
          <Text style={{color : 'white', fontWeight: 'bold'}}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => operationClick('*')}>
          <Text style={{color : '#ed802e', fontWeight: 'bold'}}>x</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick(4)}>
          <Text style={{color : 'white', fontWeight: 'bold'}}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick(5)}>
          <Text style={{color : 'white', fontWeight: 'bold'}}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick(6)}>
          <Text style={{color : 'white', fontWeight: 'bold'}}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => operationClick('-')}>
          <Text style={{color : '#ed802e', fontWeight: 'bold'}}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick(7)}>
          <Text style={{color : 'white', fontWeight: 'bold'}}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick(8)}>
          <Text style={{color : 'white', fontWeight: 'bold'}}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick(9)}>
          <Text style={{color : 'white', fontWeight: 'bold'}}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => operationClick('+')}>
          <Text style={{color : '#ed802e', fontWeight: 'bold'}}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick('.')}>
          <Text style={{color : '#ed802e', fontWeight: 'bold'}}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn} onPress={() => buttonClick(0)}>
          <Text style={{color : 'white', fontWeight: 'bold'}}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnEqual} onPress={() => buttonClick('=')}>
          <Text style={{color : '#ed802e', fontWeight: 'bold'}}>=</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const style = StyleSheet.create({

  container : {
    height : vh(95),
    // weight: vw(100),
    backgroundColor : '#243441',
    display : 'flex',
    alignItems : 'center',
    justifyContent : "flex-end"
  },

  divOp : {
    width : vw(90),
    textAlign : 'right'
  },
  textOp : {
    textAlign : "right",
    color : '#DADEF0'
  },

  divResult : {
    width : vw(90),
    textAlign : 'right',
    marginBottom : 25
  },
  textResult : {
    textAlign : "right",
    color : '#fff',
    fontSize : 35,
    fontWeight : 'bold'
  },

  divBtn : {
    width : vw(90),
    height : vh(60),
    display : 'flex',
    flexDirection : 'row',
    flexWrap : "wrap"
  },
  btn : {
    margin : 15,
    width : 57,
    height : 57,
    // borderRadius : 50,
    shadowColor: "#e5d8d8",
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnEqual : {
    margin : 15,
    width : 144,
    height : 57,
    // borderRadius : 50,
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

})
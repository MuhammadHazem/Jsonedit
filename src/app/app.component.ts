import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jsonedit';
  required: any = [];
  menuVis = false;
  file: any;
  checkedCounter = 1;
  btnjson: any = [];
  url: any = "wss://d1.nandbox.net:5020/nandbox/api/";
  serverReply = "";
  status = "DISCONNECTED";
  buttonData: any;
  serverReplyData: any;
  ws: any;
  userID: any;
  screenID: any;
  btnStyles = [
    {
      field: "button_callback",
      name: "Callback",
      type: "String",
      required: true,
      value: null
    },
    {
      field: "next_menu",
      name: "Next Menu",
      type: "Menu",
      required: false,
      value: null
    },
    {
      field: "button_span",
      name: "Span",
      type: "Number",
      required: false,
      value: null
    },
    {
      field: "button_order",
      name: "Order",
      type: "Number",
      required: false,
      value: null
    },
    {
      field: "button_textcolor",
      name: "Text Color",
      type: "Color",
      required: false,
      value: null
    },
    {
      field: "button_bgcolor",
      name: "Background Color",
      type: "Color",
      required: false,
      value: null
    },
    {
      field: "button_label",
      name: "Label",
      type: "String",
      required: false,
      value: null
    },
    {
      field: "button_url",
      name: "URL",
      type: "String",
      required: false,
      value: null
    },
    {
      field: "button_query",
      name: "Query",
      type: "String",
      required: false,
      value: null
    },
    {
      field: "api_id",
      name: "API ID",
      type: "Number",
      required: false,
      value: null
    },
    {
      field: "button_type",
      name: "Type",
      type: "String",
      required: true,
      value: null
    },
    {
      field: "button_keyboard",
      name: "Keyboard",
      type: "String",
      required: false,
      value: null
    },
    {
      field: "Button-form_type",
      name: "Button-Form Type",
      type: "String",
      required: true,
      value: null
    },
    {
      field: "Button_style",
      name: "Style",
      type: "String",
      required: true,
      value: null
    },
    {
      field: "Button_db",
      name: "Button db",
      type: "Radio",
      required: true,
      value: null
    },
    {
      field: "button_value",
      name: "Value",
      type: "String",
      required: false,
      value: null
    },
    {
      field: "button_hint",
      name: "Hint",
      type: "String",
      required: false,
      value: null
    },
    {
      field: "button_sub-label",
      name: "Sub-Label",
      type: "String",
      required: false,
      value: null
    },
    {
      field: "button_format",
      name: "Format",
      type: "String",
      required: false,
      value: null
    },
    {
      field: "button_start_date",
      name: "Start Date",
      type: "Date",
      required: false,
      value: null
    },
    {
      field: "button_end_date",
      name: "End Date",
      type: "Date",
      required: false,
      value: null
    },
    {
      field: "button_age_verification",
      name: "Age Verification",
      type: "Number",
      required: false,
      value: null
    },
    {
      field: "button_past_date",
      name: "Past Date",
      type: "Radio",
      required: false,
      value: null
    },
    {
      field: "button_future_date",
      name: "Future Date",
      type: "Radio",
      required: false,
      value: null
    },
    {
      field: "button_list_option",
      name: "Button List Option",
      type: "String",
      required: false,
      value: null
    },
    {
      field: "button_list_option_selection",
      name: "Button List Option Selection",
      type: "Array",
      required: false,
      value: null
    },
    {
      field: "button_min_value",
      name: "Minimum Value",
      type: "Number",
      required: false,
      value: null
    },
    {
      field: "button_max_value",
      name: "Maximum Value",
      type: "Number",
      required: false,
      value: null
    },
    {
      field: "button_step_value",
      name: "Step Value",
      type: "Number",
      required: false,
      value: null
    }
  ]

  form = this.fb.group({
    "user_id": new FormControl(null,Validators.required),
    "screen_id": new FormControl(null,Validators.required),
    "button_callback": new FormControl(null,Validators.required),
    "next_menu": new FormControl(),
    "button_span": new FormControl(),
    "button_order": new FormControl(),
    "button_textcolor": new FormControl(),
    "button_bgcolor": new FormControl(),
    "button_label": new FormControl(),
    "button_url": new FormControl(),
    "button_query": new FormControl(),
    "api_id": new FormControl(),
    "button_type": new FormControl(null,Validators.required),
    "button_keyboard": new FormControl(),
    "Button-form_type": new FormControl(null,Validators.required),
    "Button_style": new FormControl(null,Validators.required),
    "Button_db": new FormControl(null,Validators.required),
    "button_value": new FormControl(),
    "button_hint": new FormControl(),
    "button_sub-label": new FormControl(),
    "button_format": new FormControl(),
    "button_start_date": new FormControl(),
    "button_end_date": new FormControl(),
    "button_age_verification": new FormControl(),
    "button_past_date": new FormControl(),
    "button_future_date": new FormControl(),
    "button_list_option": new FormControl(),
    "button_list_option_selection": new FormControl(),
    "button_min_value": new FormControl(),
    "button_max_value": new FormControl(),
    "button_step_value": new FormControl()
  });

  constructor(private ref: ChangeDetectorRef, private fb: FormBuilder){
    this.btnStyles.forEach(btn => {
      if(btn.required == true){
        this.required.push(btn.field);
      }
    });
  }
  submitStyles(){
    console.log("Submit");
    let fulfilled = true;
    Object.keys(this.form.controls).forEach(key => {
      if(this.form.get(key)?.value == null && this.required.includes(key)){
        // let index = this.btnStyles.map(btn => btn.field).indexOf(key);
        // let input = document.getElementById("styleInput_"+index);
        // input!.style.borderColor = "red";
        // fulfilled = false;
      }else{
        // let index = this.btnStyles.map(btn => btn.field).indexOf(key);
        // console.log(index)
        // let input = document.getElementById("styleInput_"+index);
        // input!.style.borderColor = "";
        // this.ref.detectChanges();
      }
    });
    if(fulfilled){
      let file = this.makeFile([]);
      this.sendRequest(file)
    }else{
      window.alert("Inputs required");
    }
  }

  makeFile(data: any){
    if(data == null){
      data = [];
    }
    Object.keys(this.form.controls).forEach(key => {
      this.btnStyles.forEach(btn => {
        if(btn.field == key){
          btn.value = this.form.get(key)?.value;
        }
        if(key == "user_id"){
          this.userID = String(this.form.get(key)?.value);
        }
        if(key == "screen_id"){
          this.screenID = this.form.get(key)?.value
        }
      });
    });
    let btnData: any = {};
    Object.keys(this.form.controls).forEach(key => {
      let value = this.form.get(key)!.value;
      if(value == ''){
        value = null;
      }
      if(value != null){
        btnData[key] = value;
      }
    });
    this.btnjson = data;
    this.btnjson.push(btnData);
    this.btnjson = JSON.stringify(this.btnjson);
    console.log(this.btnjson);
    let file = JSON.stringify(
      {
        "method": "sendCellMessage",
        "user_id": this.userID,
        "screen_id": this.screenID,
        "cell_id": "",
        "text": this.btnjson,
        "reference": 123456789
      }
    )
    return file;
  }

  download(saveLocation: any){
    let a = document.createElement("a");
    Object.keys(this.form.controls).forEach(key => {
      this.btnStyles.forEach(btn => {
        if(btn.field == key){
          btn.value = this.form.get(key)?.value;
        }
        if(key == "user_id"){
          this.userID = this.form.get(key)?.value
        }
        if(key == "screen_id"){
          this.screenID = this.form.get(key)?.value
        }
      });
    });
    let downloadArray = this.btnStyles.slice();
    downloadArray.push(
      {
        field: "user_id",
        name: "User ID",
        type: "Number",
        required: true,
        value: this.userID
      },
      {
        field: "screen_id",
        name: "Screen ID",
        type: "String",
        required: true,
        value: this.screenID
      }
    );
    let file = new Blob([JSON.stringify(downloadArray)], {type: 'text/plain'});

    let filename: any;
    if(saveLocation === "downloadAs"){
      filename = window.prompt('Please enter a name for your file', 'sample');
      if(!filename){
        filename = "list"
      }
    }else if (saveLocation === "download"){
      filename = "list";
    }
    a.href = URL.createObjectURL(file);
    a.download =  filename+".txt";
    a.click();
    this.menuVis = false;
  }

  handleFileInput(e: any) {
    this.file = (e.target as HTMLInputElement)!.files!.item(0);
    let reader = new FileReader();
    let array: any;
    reader.readAsText(this.file);
    reader.onload = () => {
      let data: any = reader.result;
      array = JSON.parse(data);
      this.clearOpen(array);
    };
    this.menuVis = false;
  }

  showHide(){
    if (this.menuVis == false){
      this.menuVis = true;
    } else {
      this.menuVis = false;
    }
  }
  menuVisible(){
    if(this.menuVis == true){
      return{
        'display':'flex'
      }
    } else {
      return {
        'display': 'none'
      }
    }
  }

  clearOpen(array: any){
    if (confirm('Are you sure you want to clear and open a new file?')) {
      this.form.reset;
      this.setData(array);
    } else {
      this.menuVis = false;
    }
  }

  setData(array: any){
    array.forEach((e: any) => {
      Object.keys(this.form.controls).forEach(key => {
        this.form.setControl(e.field, this.fb.control(e.value, Validators.required));
      });
   });
  }

  isRadio(btn: any){
    if(btn.type == "Radio"){
      return true;
    }
    return false;
  }
  isNumber(btn: any){
    if(btn.type == "Number"){
      return true;
    }
    return false;
  }
  isDate(btn: any){
    if(btn.type == "Date"){
      return true;
    }
    return false;
  }
  isColor(btn: any){
    if(btn.type == "Color"){
      return true;
    }
    return false;
  }

  authenticate(){
    let tokenInput: any = document.getElementById('auth');
    let token = tokenInput.value;
    let urlInput: any = document.getElementById('url');
    this.url = urlInput.value;

    let authenticatetxt = JSON.stringify({ "token": token, "rem": true, "method": "TOKEN_AUTH" });

    this.sendRequest(authenticatetxt);
  }

  web(data: any){
  }

  sendRequest(data: any) {
    if (!this.ws || this.ws.readyState != WebSocket.OPEN) {
      console.log("url: " + this.url);
      this.ws = new WebSocket(this.url);
      this.ws.addEventListener('open', (evt: any) => {
        this.status = "CONNECTED";
        this.sendTheRequest(data);
      });
      this.ws.addEventListener('message', (evt: any) => {
        this.serverReply += "\n" + evt.data;
        if(JSON.parse(evt.data).method === "chatMenuCallback"){
          let user_ID = JSON.parse(evt.data).chatMenuCallback.chat.id;
          let screen_ID = JSON.parse(evt.data).chatMenuCallback.menu_ref;
          this.form.setControl("user_id", this.fb.control(user_ID, Validators.required));
          this.form.setControl("screen_id", this.fb.control(screen_ID, Validators.required));
          let btnData = JSON.parse(evt.data).chatMenuCallback.button_data;
          console.log(btnData);
          this.sendTheRequest(this.makeFile(btnData));
        }
      });
      this.ws.addEventListener('close', (evt: any) => {
        this.status = "DISCONNECTED";
      });
    }
    else {
      this.sendTheRequest(data);
    }
  }

  sendTheRequest(data: any) {
    console.log("sending request" + data);
    if (!this.ws || this.ws.readyState != WebSocket.OPEN){
      throw "WebSocket not open";
    }
    this.ws.send(data);
  }

  clearReply() {
    this.serverReply = "";
  }
}









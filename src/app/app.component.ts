import { Component, ChangeDetectorRef, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  title = 'Workflow Cell Test';
  required: any = [];
  menuVis = false;
  file: any;
  checkedCounter = 1;
  btnjson: any = [];
  url: any = "wss://d1.nandbox.net:5020/nandbox/api/";
  serverReply = "";
  status = "Disconnected";
  APIVersion = "oldAPI";
  buttonData: any;
  serverReplyData: any;
  ws: any;
  userID: any;
  screenID: any;
  appID: any;
  autoFill = false;
  autoReply = false;
  disableNotif = false;
  viewValue = false;
  viewOption = false;
  valList: any;
  optionList: any;
  currentStyleNum = 1;
  totalStyleNum = 1;
  container: any;
  authbtnDisabled = true;
  colorBG = "#362f2f";
  colorTxt = "#ffffff";
  colorIcon = "#38b3df";
  colorBorder = "#ffffff";
  styleID = 0;
  btnStyles = [
    [
      {
        field: "user_id",
        name: "User ID",
        type: "String",
        value: null
      },
      {
        field: "screen_id",
        name: "Screen ID",
        type: "String",
        value: null
      },
      {
        field: "app_id",
        name: "App ID",
        type: "String",
        value: null
      },
      {
        field: "callback",
        name: "Callback",
        type: "String",
        value: null
      },
      {
        field: "next_screen",
        name: "Next Screen",
        type: "Menu",
        value: null
      },
      {
        field: "span",
        name: "Span",
        type: "Number",
        value: null
      },
      {
        field: "order",
        name: "Order",
        type: "Number",
        value: null
      },
      {
        field: "textcolor",
        name: "Text Color",
        type: "Color",
        value: null
      },
      {
        field: "bg_color",
        name: "Background Color",
        type: "Color",
        value: null
      },
      {
        field: "label",
        name: "Label",
        type: "String",
        value: null
      },
      {
        field: "url",
        name: "URL",
        type: "String",
        value: null
      },
      {
        field: "query",
        name: "Query",
        type: "String",
        value: null
      },
      {
        field: "cell_id",
        name: "Cell ID",
        type: "String",
        value: null
      },
      {
        field: "type",
        name: "Type",
        type: "String",
        value: null
      },
      {
        field: "keyboard",
        name: "Keyboard",
        type: "String",
        value: null
      },
      {
        field: "button-form_type",
        name: "Button-Form Type",
        type: "String",
        value: null
      },
      {
        field: "style",
        name: "Style",
        type: "String",
        value: null
      },
      {
        field: "cache",
        name: "Cache",
        type: "Radio",
        value: null
      },
      {
        field: "value",
        name: "Value",
        type: "String",
        value: null
      },
      {
        field: "option",
        name: "Option",
        type: "String",
        value: null
      },
      {
        field: "hint",
        name: "Hint",
        type: "String",
        value: null
      },
      {
        field: "sublabel",
        name: "Sub-Label",
        type: "String",
        value: null
      },
      {
        field: "format",
        name: "Format",
        type: "String",
        value: null
      },
      {
        field: "start_date",
        name: "Start Date",
        type: "Date",
        value: null
      },
      {
        field: "end_date",
        name: "End Date",
        type: "Date",
        value: null
      },
      {
        field: "age_verification",
        name: "Age Verification",
        type: "Number",
        value: null
      },
      {
        field: "past_date",
        name: "Past Date",
        type: "Radio",
        value: null
      },
      {
        field: "future_date",
        name: "Future Date",
        type: "Radio",
        value: null
      },
      {
        field: "list_option",
        name: "Button List Option",
        type: "String",
        value: null
      },
      {
        field: "list_option_selection",
        name: "Button List Option Selection",
        type: "Array",
        value: null
      },
      {
        field: "min_value",
        name: "Minimum Value",
        type: "Number",
        value: null
      },
      {
        field: "max_value",
        name: "Maximum Value",
        type: "Number",
        value: null
      },
      {
        field: "step_value",
        name: "Step Value",
        type: "Number",
        value: null
      },
      {
        field: "icon_bgcolor",
        name: "Icon Background Color",
        type: "Color",
        value: null
      },
      {
        field: "border_color",
        name: "Border Color",
        type: "Color",
        value: null
      },
      {
        field: "icon",
        name: "Icon",
        type: "SVG Path",
        value: null
      }
    ]
  ]

  form = this.fb.group({
    "user_id": new FormControl("",Validators.required),
    "screen_id": new FormControl(null,Validators.required),
    "callback": new FormControl(null,Validators.required),
    "next_screen": new FormControl(),
    "span": new FormControl(),
    "order": new FormControl(),
    "textcolor": new FormControl("#ffffff"),
    "bg_color": new FormControl("#362f2f"),
    "label": new FormControl(),
    "url": new FormControl(),
    "query": new FormControl(),
    "app_id": new FormControl(),
    "cell_id": new FormControl(),
    "type": new FormControl(null,Validators.required),
    "keyboard": new FormControl(),
    "button-form_type": new FormControl(null,Validators.required),
    "style": new FormControl(null,Validators.required),
    "cache": new FormControl(null,Validators.required),
    "value": new FormControl(),
    "option": new FormControl(),
    "hint": new FormControl(),
    "sublabel": new FormControl(),
    "format": new FormControl(),
    "start_date": new FormControl(),
    "end_date": new FormControl(),
    "age_verification": new FormControl(),
    "past_date": new FormControl(),
    "future_date": new FormControl(),
    "list_option": new FormControl(),
    "list_option_selection": new FormControl(),
    "min_value": new FormControl(),
    "max_value": new FormControl(),
    "step_value": new FormControl(),
    "icon_bgcolor": new FormControl("#38b3df"),
    "border_color": new FormControl("#ffffff")
  });

  constructor(private ref: ChangeDetectorRef, private fb: FormBuilder){
    // this.btnStyles[this.styleID].forEach(btn => {
    //   if(btn.required == true){
    //     this.required.push(btn.field);
    //   }
    // });
    // window.addEventListener('click', function(e: any){
    //   if (!document.getElementById('fileDM')!.contains(e.target) && (!document.getElementById('logo-menu')!.contains(e.target))){
    //    document.getElementById('l2')!.style.height="0px"; //the same code you've used to hide the menu
    //   }
    // });
  }

  //submit button pressed sends data
  submitStyles(){
    console.log("Submit");
    // let fulfilled = true;
    // Object.keys(this.form.controls).forEach(key => {
    //   if(this.form.get(key)?.value == null && this.required.includes(key)){
        // let index = this.btnStyles.map(btn => btn.field).indexOf(key);
        // let input = document.getElementById("styleInput_"+index);
        // input!.style.borderColor = "red";
        // fulfilled = false;
      // }else{
        // let index = this.btnStyles.map(btn => btn.field).indexOf(key);
        // console.log(index)
        // let input = document.getElementById("styleInput_"+index);
        // input!.style.borderColor = "";
        // this.ref.detectChanges();
      // }
    // });
    // if(fulfilled){
      let file = this.makeFile([], this.styleID);
      this.sendTheRequest(file);
    // }else{
      // window.alert("Inputs required");
    // }
  }

  //compile data to be sent to server as an object
  makeFile(data: any, id: any){
    if(data == null){
      data = [];
    }
    Object.keys(this.form.controls).forEach(key => {
      this.btnStyles[id].forEach(btn => {
        if(btn.field == key){
          btn.value = this.form.get(key)?.value;
        }
      });
    });
    let file: any
    if(this.APIVersion === "oldAPI"){
      let btnData: any = {};
      Object.keys(this.form.controls).forEach(key => {
        let value = this.form.get(key)!.value;
        if(value == ''){
          value = null;
        }
        if(value != null && key != "user_id" && key != "app_id" && key != "screen_id"){
          btnData[key] = value;
        }
        if(value != null && key === "value"){
          console.log(this.form.get(key)?.value);
          btnData[key] = JSON.parse(value);
          console.log(btnData[key]);
        }
        if(value != null && key === "option"){
          console.log(this.form.get(key)?.value);
          btnData[key] = JSON.parse(value);
          console.log(btnData[key]);
        }
      });
      btnData["icon"] = this.svgPath.name;
      this.btnjson = data;
      this.btnjson.push(btnData);
      file = JSON.stringify(
        {
          method: "setWorkflow",
          user_id: String(this.form.controls["user_id"].value),
          screen_id: this.form.controls["screen_id"].value,
          cell_id: this.form.controls["cell_id"].value,
          app_id: String(this.form.controls["app_id"].value),
          message: "",
          type: null,
          workflow_cell: this.btnjson,
          reference: 123456789
        }
      )
    } else if(this.APIVersion === "newAPI"){
      let btnData: any = {};
      Object.keys(this.form.controls).forEach(key => {
        let value = this.form.get(key)!.value;
        if(value == ''){
          value = null;
        }
        let newAPIObjects = ["cell_id","callback", "api_id", "cache", "next_screen", "url", "bg_color", "label", "label_color", "sublabel", "sublabel_color", "hint", "value"];
        if(value != null && (newAPIObjects.includes(key) || key === "text_color")){
          if(key === "text_color"){
            btnData["sublabel_color"] = value;
            btnData["label_color"] = value;
          } else {
            btnData[key] = value;
          }
        }
      });
      this.btnjson = data;
      this.btnjson.push(btnData);
      file = JSON.stringify(
        {
          method: "setWorkflow",
          user_id: String(this.form.controls["user_id"].value),
          screen_id: this.form.controls["screen_id"].value,
          workflow_cell: this.btnjson,
          reference: 123456789,
          disable_notification: this.disableNotif
        }
      )
    }
    return file;
  }

  //for color selector change
  onChangeTxtColor(e: any){
    this.colorTxt = e;
    this.form.setControl("textcolor", this.fb.control(e, Validators.required));
  }
  onChangeBgColor(e: any){
    this.colorBG = e;
    this.form.setControl("bg_color", this.fb.control(e, Validators.required));
  }
  onChangeIconBgColor(e: any){
    this.colorIcon = e;
    this.form.setControl("icon_bgcolor", this.fb.control(e, Validators.required));
  }
  onChangeBorderColor(e: any){
    this.colorBorder = e;
    this.form.setControl("border_color", this.fb.control(e, Validators.required));
  }

  openValue(){
    let values = JSON.parse(this.form.get("value")?.value);
    if(values){
      this.valList = values;
    } else {
      this.valList = [];
    }
    this.viewValue = true;
  }

  changeValue(){
    for(let i = 0; i < this.valList.length; i++){
      let val: any = (document.getElementById("value_"+i+"_value") as any).value;
      console.log(val);
      this.valList[i].value = val;
      let id: any = (document.getElementById("value_"+i+"_id") as any).value;
      console.log(id);
      this.valList[i].option_id = id;
    }
    if(this.valList.length == 0){
      this.form.setControl("value", this.fb.control(null, Validators.required));
    } else {
      let txt = JSON.stringify(this.valList);
      this.form.setControl("value", this.fb.control(txt, Validators.required));
    }
    this.viewValue = false;
  }

  addValue(){
    this.valList.push({"option_id": "" , "value": ""});
  }

  disposeValue(index: any){
    this.valList.splice(index, 1);
  }

  openOption(){
    let options = JSON.parse(this.form.get("option")?.value);
    if(options){
      this.optionList = options;
    } else {
      this.optionList = [];
    }
    this.viewOption = true;
    for(let i = 0; i < this.optionList.length; i++){

    }
  }

  changeOption(){
    for(let i = 0; i < this.optionList.length; i++){
      let label: any = (document.getElementById("option_"+i+"_label") as any).value;
      console.log(label);
      this.optionList[i].label = label;
      let sublable: any = (document.getElementById("option_"+i+"_sublable") as any).value;
      console.log(sublable);
      this.optionList[i].sublable = sublable;
      let image: any = (document.getElementById("option_"+i+"_image") as any).value;
      console.log(image);
      this.optionList[i].image = image;
      let id: any = (document.getElementById("option_"+i+"_id") as any).value;
      console.log(id);
      this.optionList[i].option_id = id;
    }
    if(this.optionList.length == 0){
      this.form.setControl("option", this.fb.control(null, Validators.required));
    } else {
      let txt = JSON.stringify(this.optionList);
      this.form.setControl("option", this.fb.control(txt, Validators.required));
    }
    this.viewOption = false;
  }

  asignIcon(event: any, index: any){
    this.optionList[index].icon = event.name;
  }

  addOption(){
    this.optionList.push({"option_id": "", "label": "", "sublable": "", "image": "", "icon": ""});
  }

  disposeOption(index: any){
    this.optionList.splice(index, 1);
  }

  closeReset(){
    this.viewValue = false;
    this.viewOption = false;
  }

  //download the data/workflow currently saved
  download(saveLocation: any){
    let a = document.createElement("a");
    Object.keys(this.form.controls).forEach(key => {
      this.btnStyles[this.styleID].forEach(btn => {
        if(btn.field === "icon"){
          btn.value = this.svgPath;
        } else if(btn.field == key){
          btn.value = this.form.get(key)?.value;
        }
      });
    });
    let downloadArray = this.btnStyles.slice();
    let file = new Blob([JSON.stringify(downloadArray, null, 2)], {type: 'text/plain'});

    let filename: any;
    // if(saveLocation === "downloadAs"){
    filename = window.prompt('Please enter a name for your file', 'sample');
    if(!filename){
      filename = "list"
    }
    // else if (saveLocation === "download"){
    //   filename = "list";
    // }
    a.href = URL.createObjectURL(file);
    a.download =  filename+".txt";
    a.click();
    this.menuVis = false;
  }

  //open workflow file and load data
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

  //show/hide file menu
  showHide(){
    if (this.menuVis == false){
      this.menuVis = true;
      let filebtn = document.getElementById("filebtn");
      let filetxt = document.getElementById("filetxt");
      filebtn!.style.borderColor = "#26b2f6";
      filetxt!.style.color = "#26b2f6";
    } else {
      this.menuVis = false;
      let filebtn = document.getElementById("filebtn");
      let filetxt = document.getElementById("filetxt");
      filebtn!.style.borderColor = "#dfe5ea";
      filetxt!.style.color = "#172b4d";
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

  //clear data and open a new file and extract data from it, then sets that data
  clearOpen(array: any){
    if (confirm('Are you sure you want to clear and open a new file?')) {
      this.form.reset;
      this.btnStyles = array;
      this.styleID = this.btnStyles.length - 1;
      this.totalStyleNum = this.btnStyles.length;
      this.currentStyleNum = this.btnStyles.length;
      this.setData(this.btnStyles[this.styleID]);
    } else {
      this.menuVis = false;
    }
  }
  setData(array: any){
    array.forEach((e: any) => {
      Object.keys(this.form.controls).forEach(key => {
        if(e.field === "icon"){
          this.svgPath = e.value;
        } else if (e.field === "bg_color"){
          this.colorBG = e.value;
          this.form.setControl(e.field, this.fb.control(e.value, Validators.required));
        }  else if (e.field === "border_color"){
          this.colorBorder = e.value;
          this.form.setControl(e.field, this.fb.control(e.value, Validators.required));
        }  else if (e.field === "icon_bgcolor"){
          this.colorIcon = e.value;
          this.form.setControl(e.field, this.fb.control(e.value, Validators.required));
        }  else if (e.field === "textcolor"){
          this.colorTxt = e.value;
          this.form.setControl(e.field, this.fb.control(e.value, Validators.required));
        } else if (e.field === "icon"){
          this.svgPath = e.value;
        }else{
          this.form.setControl(e.field, this.fb.control(e.value, Validators.required));
        }
      });
   });
   this.ref.detectChanges();
  }

  //for input data types
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

  //authenticate the websocket connection when button pressed
  authenticate(){
    if(!this.authbtnDisabled){
      let tokenInput: any = document.getElementById('auth');
      let token = tokenInput.value;
      let urlInput: any = document.getElementById('url');
      this.url = urlInput.value;

      let authenticatetxt = JSON.stringify({ "token": token, "rem": true, "method": "TOKEN_AUTH" });

      this.sendRequest(authenticatetxt);
    }
  }

  //disables authenticate button if token or url not inputted
  isAuthDisabled(tokenInput: any, urlInput: any){
    if(tokenInput && urlInput){
      this.authbtnDisabled = false;
    } else {
      this.authbtnDisabled = true;
    }
  }

  //sends the data to request, auto-responds and auto-fills if feature selected
  sendRequest(data: any) {
    if (!this.ws || this.ws.readyState != WebSocket.OPEN) {
      console.log("url: " + this.url);
      this.ws = new WebSocket(this.url);
      this.ws.onopen = (event: any) => console.log(event);
      this.ws.addEventListener('open', (evt: any) => {
        this.status = "Connected";
        let statusbg = document.getElementById("statusbg");
        let statusLED = document.getElementById("statusLED");
        statusbg!.style.backgroundColor = "#eafbef";
        statusLED!.style.backgroundColor = "#14cf57";
        this.ref.detectChanges();
        console.log("opened");
        this.sendTheRequest(data);
      });
      this.ws.addEventListener('message', (evt: any) => {
        this.serverReply += "\n" + evt.data + "\n";
        this.ref.detectChanges();
        console.log(this.autoFill);
        let methodVersion: any;
        if(this.APIVersion === "oldAPI"){
          methodVersion = "chatMenuCallback";
        } else if(this.APIVersion === "newAPI"){
          methodVersion = "chatMenuCallback";
        }
        if(JSON.parse(evt.data).method === methodVersion && this.autoFill == true){
          let user_ID = String(JSON.parse(evt.data).chatMenuCallback.chat.id);
          let screen_ID = JSON.parse(evt.data).chatMenuCallback.menu_ref;
          let app_id = String(JSON.parse(evt.data).chatMenuCallback.app_id);
          let button_callback = JSON.parse(evt.data).chatMenuCallback.button_callback;
          this.form.setControl("user_id", this.fb.control(user_ID, Validators.required));
          this.form.setControl("screen_id", this.fb.control(screen_ID, Validators.required));
          this.form.setControl("app_id", this.fb.control(app_id, Validators.required));
          this.form.setControl("callback", this.fb.control(button_callback, Validators.required));
          this.form.setControl("cell_id", this.fb.control(button_callback, Validators.required));
        }
        if(JSON.parse(evt.data).method === methodVersion && this.autoReply == true){
          let user_ID = String(JSON.parse(evt.data).chatMenuCallback.chat.id);
          let screen_ID = JSON.parse(evt.data).chatMenuCallback.menu_ref;
          let app_id = String(JSON.parse(evt.data).chatMenuCallback.app_id);
          let button_callback = JSON.parse(evt.data).chatMenuCallback.button_callback;
          let btnData = JSON.parse(evt.data).chatMenuCallback.button_data;
          Object.keys(this.form.controls).forEach(key => {
            this.btnStyles[this.styleID].forEach(btn => {
              if(btn.field === "icon"){
                btn.value = this.svgPath;
              } else if(btn.field == key){
                btn.value = this.form.get(key)?.value;
              }
            });
          });
          console.log(btnData);
          this.btnStyles.forEach((style: any) => {
            let userPass = false;
            let screenPass = false;
            let appPass = false;
            let cellPass = false;
            let callbackPass = false;
            if(style.find((res: any) => res.field === "user_id").value == user_ID || style.find((res: any) => res.field === "user_id").value == null){
              userPass = true;
            }
            if(style.find((res: any) => res.field === "screen_id").value == screen_ID || style.find((res: any) => res.field === "screen_id").value == null){
              screenPass = true;
            }
            if(style.find((res: any) => res.field === "app_id").value == app_id || style.find((res: any) => res.field === "app_id").value == null){
              appPass = true;
            }
            if(style.find((res: any) => res.field === "cell_id").value == button_callback || style.find((res: any) => res.field === "cell_id").value == null){
              cellPass = true;
            }
            if(style.find((res: any) => res.field === "callback").value == button_callback || style.find((res: any) => res.field === "callback").value == null){
              callbackPass = true;
            }
            if(userPass && screenPass && appPass && cellPass && callbackPass){
              this.sendTheRequest(this.makeFile(btnData, this.btnStyles.indexOf(style)));
            }
          });
        }
      });
      this.ws.addEventListener('close', (evt: any) => {
        this.status = "Disconnected";
        let statusbg = document.getElementById("statusbg");
        let statusLED = document.getElementById("statusLED");
        statusbg!.style.backgroundColor = "#ffedec";
        statusLED!.style.backgroundColor = "#ff3b30";
      });
    }
  }
  sendTheRequest(data: string) {
    console.log("sending request " + data);
    if (!this.ws || this.ws.readyState != WebSocket.OPEN){
      throw "WebSocket not open";
    }
    this.ws.send(data);
  }

  //clears txt for areas name specified
  clearReply() {
    this.serverReply = "";
  }
  clearTxtArea() {
    (document.getElementById("txtarea") as HTMLTextAreaElement)!.value = "";
  }

  //toggle functions
  autoFillToggle(){
    this.autoFill = !this.autoFill;
    console.log(this.autoFill);
  }
  autoReplyToggle(){
    this.autoReply = !this.autoReply;
    console.log(this.autoReply);
  }
  notifToggle(){
    this.disableNotif = !this.disableNotif;
    console.log(this.disableNotif);
  }
  APIVersionToggle(e: any){
    if(e.target.checked === true){
      this.APIVersion = "newAPI";
    } else if(e.target.checked === false){
      this.APIVersion = "oldAPI";
    }
    console.log("api",this.APIVersion);
  }

  //for reseting style variable to default
  newStyle(){
    this.btnStyles.push(
      [
        {
          field: "user_id",
          name: "User ID",
          type: "String",
          value: null
        },
        {
          field: "screen_id",
          name: "Screen ID",
          type: "String",
          value: null
        },
        {
          field: "app_id",
          name: "App ID",
          type: "String",
          value: null
        },
        {
          field: "callback",
          name: "Callback",
          type: "String",
          value: null
        },
        {
          field: "next_screen",
          name: "Next Screen",
          type: "Menu",
          value: null
        },
        {
          field: "span",
          name: "Span",
          type: "Number",
          value: null
        },
        {
          field: "order",
          name: "Order",
          type: "Number",
          value: null
        },
        {
          field: "textcolor",
          name: "Text Color",
          type: "Color",
          value: null
        },
        {
          field: "bg_color",
          name: "Background Color",
          type: "Color",
          value: null
        },
        {
          field: "label",
          name: "Label",
          type: "String",
          value: null
        },
        {
          field: "url",
          name: "URL",
          type: "String",
          value: null
        },
        {
          field: "query",
          name: "Query",
          type: "String",
          value: null
        },
        {
          field: "cell_id",
          name: "Cell ID",
          type: "String",
          value: null
        },
        {
          field: "type",
          name: "Type",
          type: "String",
          value: null
        },
        {
          field: "keyboard",
          name: "Keyboard",
          type: "String",
          value: null
        },
        {
          field: "button-form_type",
          name: "Button-Form Type",
          type: "String",
          value: null
        },
        {
          field: "style",
          name: "Style",
          type: "String",
          value: null
        },
        {
          field: "cache",
          name: "Cache",
          type: "Radio",
          value: null
        },
        {
          field: "value",
          name: "Value",
          type: "String",
          value: null
        },
        {
          field: "option",
          name: "Option",
          type: "String",
          value: null
        },
        {
          field: "hint",
          name: "Hint",
          type: "String",
          value: null
        },
        {
          field: "sublabel",
          name: "Sub-Label",
          type: "String",
          value: null
        },
        {
          field: "format",
          name: "Format",
          type: "String",
          value: null
        },
        {
          field: "start_date",
          name: "Start Date",
          type: "Date",
          value: null
        },
        {
          field: "end_date",
          name: "End Date",
          type: "Date",
          value: null
        },
        {
          field: "age_verification",
          name: "Age Verification",
          type: "Number",
          value: null
        },
        {
          field: "past_date",
          name: "Past Date",
          type: "Radio",
          value: null
        },
        {
          field: "future_date",
          name: "Future Date",
          type: "Radio",
          value: null
        },
        {
          field: "list_option",
          name: "Button List Option",
          type: "String",
          value: null
        },
        {
          field: "list_option_selection",
          name: "Button List Option Selection",
          type: "Array",
          value: null
        },
        {
          field: "min_value",
          name: "Minimum Value",
          type: "Number",
          value: null
        },
        {
          field: "max_value",
          name: "Maximum Value",
          type: "Number",
          value: null
        },
        {
          field: "step_value",
          name: "Step Value",
          type: "Number",
          value: null
        },
        {
          field: "icon_bgcolor",
          name: "Icon Background Color",
          type: "Color",
          value: null
        },
        {
          field: "border_color",
          name: "Border Color",
          type: "Color",
          value: null
        },
        {
          field: "icon",
          name: "Icon",
          type: "SVG Path",
          value: null
        }
      ]
    )
    Object.keys(this.form.controls).forEach(key => {
      this.btnStyles[this.styleID].forEach(btn => {
        if(btn.field === "icon"){
          btn.value = this.svgPath;
        } else if(btn.field == key){
          btn.value = this.form.get(key)?.value;
        }
      });
    });
    this.styleID = this.btnStyles.length - 1;
    this.totalStyleNum++;
    this.currentStyleNum = this.btnStyles.length;
    this.form.reset();
    this.setData(this.btnStyles[this.styleID]);
    this.colorBG = "#362f2f";
    this.colorTxt = "#ffffff";
    this.colorIcon = "#38b3df";
    this.colorBorder = "#ffffff";
    this.form.setControl("bg_color", this.fb.control("#362f2f", Validators.required));
    this.form.setControl("border_color", this.fb.control("#ffffff", Validators.required));
    this.form.setControl("icon_bgcolor", this.fb.control("#38b3df", Validators.required));
    this.form.setControl("textcolor", this.fb.control("#ffffff", Validators.required));
    this.svgPath = { name: "ic_assignment_24dp" };
  }

  //switching to next sytle(workflow) if there is
  nextStyle(){
    if(this.styleID < this.btnStyles.length - 1){
      Object.keys(this.form.controls).forEach(key => {
        this.btnStyles[this.styleID].forEach(btn => {
          if(btn.field === "icon"){
            btn.value = this.svgPath;
          } else if(btn.field == key){
            btn.value = this.form.get(key)?.value;
          }
        });
      });
      this.styleID++;
      this.currentStyleNum = this.styleID + 1;
      this.form.reset();
      this.setData(this.btnStyles[this.styleID]);
    }
  }

  //switching to previous style(style) if there is
  backStyle(){
    if(this.styleID > 0){
      Object.keys(this.form.controls).forEach(key => {
        this.btnStyles[this.styleID].forEach(btn => {
          if(btn.field === "icon"){
            btn.value = this.svgPath;
          } else if(btn.field == key){
            btn.value = this.form.get(key)?.value;
          }
        });
      });
      this.styleID--;
      this.currentStyleNum = this.styleID + 1;
      this.form.reset();
      this.setData(this.btnStyles[this.styleID]);
    }
  }
//---------------------------------------------------------------Icon selector related objects and functions----------------------------------------------------------------------------------
  MOBILE_TYPES = {
    ANDROID: 'Android',
    IOS: 'IOS'
  }
  @Input() disabled = false;
  svgPath: any = { name: "ic_assignment_24dp" };
  postFooterName = [
    'ic_comment',
    'ic_comment_box',
    'ic_comment_bubble',
    'ic_comment_bubbles',
    'ic_comment_triangle',
    'ic_share',
    'ic_share_arrow',
    'ic_share_circle',
    'ic_share_circle_fullbg',
    'ic_share_network',
    'ic_unlike_hand',
    'ic_unlike_heart',
    'ic_unlike_light_bulb',
    'ic_unlike_start',
    'ic_unlike_tick',
    'ic_view',
    'ic_view_eye_tab',
    'ic_view_aeye_view',
    'ic_view_eye_view',
    'ic_view_full_eye'
  ];
  iosNames = [
    'group-5',
    'ic-add-user-29-px',
    'ic-bus-29-px',
    'ic-calendar-29-px',
    'ic-car-29-px',
    'ic-channels-29-px',
    'ic-chat-29-px',
    'ic-explore-29-px',
    'ic-gallery-29-px',
    'ic-groups-29-px',
    'ic-help-29-px',
    'ic-list-29-px',
    'ic-location-29-px',
    'ic-message-29-px',
    'ic-news-29-px',
    'ic-phone-29-px',
    'ic-qr-code-29-px',
    'ic-settings-29-px',
    'ic-star-29-px',
    'ic-sticker-29-px',
    'ic-tickets-29-px',
    'ic-trip-29-px',
    'ic-contact-us-29-Px',
    'ic-search-29-Px'
  ];

  iconNames = [
    'ic_3d_rotation_24dp',
    'ic_ac_unit_24dp',
    'ic_accessibility_24dp',
    'ic_accessible_24dp',
    'ic_account_balance_24dp',
    'ic_account_balance_wallet_24dp',
    'ic_account_box_24dp',
    'ic_account_circle_24dp',
    'ic_add_shopping_cart_24dp',
    'ic_airport_shuttle_24dp',
    'ic_alarm_24dp',
    'ic_alarm_add_24dp',
    'ic_alarm_off_24dp',
    'ic_alarm_on_24dp',
    'ic_all_inclusive_24dp',
    'ic_all_out_24dp',
    'ic_android_24dp',
    'ic_announcement_24dp',
    'ic_aspect_ratio_24dp',
    'ic_assessment_24dp',
    'ic_assignment_24dp',
    'ic_assignment_ind_24dp',
    'ic_assignment_late_24dp',
    'ic_assignment_return_24dp',
    'ic_assignment_returned_24dp',
    'ic_assignment_turned_in_24dp',
    'ic_autorenew_24dp',
    'ic_backup_24dp',
    'ic_ball_ic_24dp',
    'ic_baseline_bluetooth_audio_24dp',
    'ic_baseline_chat_24dp',
    'ic_baseline_directions_car_24dp',
    'ic_baseline_drag_handle_24dp',
    'ic_baseline_event_24dp',
    'ic_baseline_favorite_24dp',
    'ic_baseline_favorite_border_24dp',
    'ic_baseline_gps_fixed_24dp',
    'ic_baseline_headset_24dp',
    'ic_baseline_local_cafe_24dp',
    'ic_baseline_person_24dp',
    'ic_baseline_play_circle_outline_24dp',
    'ic_baseline_search_24dp',
    'ic_baseline_star_rate_18px_24dp',
    'ic_book_24dp',
    'ic_bookmark_24dp',
    'ic_bookmark_border_24dp',
    'ic_bug_report_24dp',
    'ic_build_24dp',
    'ic_business_center_24dp',
    'ic_cached_24dp',
    'ic_cake_24dp',
    'ic_calendar_24dp',
    'ic_camera_enhance_24dp',
    'ic_card_giftcard_24dp',
    'ic_card_membership_24dp',
    'ic_card_membership_black_24dp',
    'ic_card_travel_24dp',
    'ic_casino_24dp',
    'ic_change_history_24dp',
    'ic_check_circle_24dp',
    'ic_child_care_24dp',
    'ic_child_friendly_24dp',
    'ic_chrome_reader_mode_24dp',
    'ic_class_24dp',
    'ic_code_24dp',
    'ic_compare_arrows_24dp',
    'ic_copyright_24dp',
    'ic_credit_card_24dp',
    'ic_dashboard_24dp',
    'ic_date_range_24dp',
    'ic_delete_24dp',
    'ic_delete_forever_24dp',
    'ic_description_24dp',
    'ic_dns_24dp',
    'ic_domain_24dp',
    'ic_donation_icon_24dp_24dp',
    'ic_done_24dp',
    'ic_done_all_24dp',
    'ic_donut_large_24dp',
    'ic_donut_small_24dp',
    'ic_eject_24dp',
    'ic_euro_symbol_24dp',
    'ic_event_24dp',
    'ic_event_seat_24dp',
    'ic_exit_to_app_24dp',
    'ic_explore_24dp',
    'ic_extension_24dp',
    'ic_face_24dp',
    'ic_favorite_24dp',
    'ic_favorite_border_24dp',
    'ic_feedback_24dp',
    'ic_find_in_page_24dp',
    'ic_find_replace_24dp',
    'ic_fingerprint_24dp',
    'ic_fitness_center_24dp',
    'ic_flight_land_24dp',
    'ic_flight_takeoff_24dp',
    'ic_flip_to_back_24dp',
    'ic_flip_to_front_24dp',
    'ic_free_breakfast_24dp',
    'ic_g_translate_24dp'
  ];

  locationIconNames = [
    'location_pin_hospital_32_px',
    'location_pin_hotel_32_px',
    'location_gas_station_32_px',
    'location_coffee_shop_32_px',
    'location_bank_32_px',
    'location_market_32_px',
    'bus_stop_32_px',
    'location_home_32_px',
    'location_pin_school_32_px',
    'soccer_field_32_px',
    'location_restaurant_32_px',
    'location_park_32_px',
    'location_mosque_32_px',
    'location_church_32_px',
    'mountain_32_px',
    'swimmer_32_px',
    'location_police_office_32_px',
    'location_dance_32_px',
    'location_post_office_32_px',
    'location_coffee_parking_32_px',
    'bus_station_32_px',
    'train_station_32_px',
    'air_port_32_px',
    'location_ship_32_px',
    'bike_parking_32_px',
    'motorcycle_parking_32_px',
    'location_park_32_px',
    'location_tent_32_px',
    'location_gym_32_px',
    'location_zoo_32_px',
    'traffic_light_32_px',
    'barrier_32_px'
  ];
  mobTypes: any;
  autoClose = true;
  showIconsMenu = false;
  selectedSeaction = 'firstSeaction';
  @Input() iconName: string = "";
  @Input() iconList: string = "";
  @Output() updateItemIconNotify = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.iconList) {
      this.iconList = this.MOBILE_TYPES.ANDROID;
      console.log(this.iconList);
    }
  }
  ngOnChanges() {
    if (this.iconName) {
      this.svgPath = { ...this.svgPath, name: this.iconName };
    }
  }

  selectIconSeaction(selectedSeaction: any) {
    this.autoClose = false;
    if (selectedSeaction === 'firstSeaction') {
      this.selectedSeaction = 'firstSeaction';
      this.iconNames = [
        'ic_3d_rotation_24dp',
        'ic_ac_unit_24dp',
        'ic_accessibility_24dp',
        'ic_accessible_24dp',
        'ic_account_balance_24dp',
        'ic_account_balance_wallet_24dp',
        'ic_account_box_24dp',
        'ic_account_circle_24dp',
        'ic_add_shopping_cart_24dp',
        'ic_airport_shuttle_24dp',
        'ic_alarm_24dp',
        'ic_alarm_add_24dp',
        'ic_alarm_off_24dp',
        'ic_alarm_on_24dp',
        'ic_all_inclusive_24dp',
        'ic_all_out_24dp',
        'ic_android_24dp',
        'ic_announcement_24dp',
        'ic_aspect_ratio_24dp',
        'ic_assessment_24dp',
        'ic_assignment_24dp',
        'ic_assignment_ind_24dp',
        'ic_assignment_late_24dp',
        'ic_assignment_return_24dp',
        'ic_assignment_returned_24dp',
        'ic_assignment_turned_in_24dp',
        'ic_autorenew_24dp',
        'ic_backup_24dp',
        'ic_ball_ic_24dp',
        'ic_baseline_bluetooth_audio_24dp',
        'ic_baseline_chat_24dp',
        'ic_baseline_directions_car_24dp',
        'ic_baseline_drag_handle_24dp',
        'ic_baseline_event_24dp',
        'ic_baseline_favorite_24dp',
        'ic_baseline_favorite_border_24dp',
        'ic_baseline_gps_fixed_24dp',
        'ic_baseline_headset_24dp',
        'ic_baseline_local_cafe_24dp',
        'ic_baseline_person_24dp',
        'ic_baseline_play_circle_outline_24dp',
        'ic_baseline_search_24dp',
        'ic_baseline_star_rate_18px_24dp',
        'ic_book_24dp',
        'ic_bookmark_24dp',
        'ic_bookmark_border_24dp',
        'ic_bug_report_24dp',
        'ic_build_24dp',
        'ic_business_center_24dp',
        'ic_cached_24dp',
        'ic_cake_24dp',
        'ic_calendar_24dp',
        'ic_camera_enhance_24dp',
        'ic_card_giftcard_24dp',
        'ic_card_membership_24dp',
        'ic_card_membership_black_24dp',
        'ic_card_travel_24dp',
        'ic_casino_24dp',
        'ic_change_history_24dp',
        'ic_check_circle_24dp',
        'ic_child_care_24dp',
        'ic_child_friendly_24dp',
        'ic_chrome_reader_mode_24dp',
        'ic_class_24dp',
        'ic_code_24dp',
        'ic_compare_arrows_24dp',
        'ic_copyright_24dp',
        'ic_credit_card_24dp',
        'ic_dashboard_24dp',
        'ic_date_range_24dp',
        'ic_delete_24dp',
        'ic_delete_forever_24dp',
        'ic_description_24dp',
        'ic_dns_24dp',
        'ic_domain_24dp',
        'ic_donation_icon_24dp_24dp',
        'ic_done_24dp',
        'ic_done_all_24dp',
        'ic_donut_large_24dp',
        'ic_donut_small_24dp',
        'ic_eject_24dp',
        'ic_euro_symbol_24dp',
        'ic_event_24dp',
        'ic_event_seat_24dp',
        'ic_exit_to_app_24dp',
        'ic_explore_24dp',
        'ic_extension_24dp',
        'ic_face_24dp',
        'ic_favorite_24dp',
        'ic_favorite_border_24dp',
        'ic_feedback_24dp',
        'ic_find_in_page_24dp',
        'ic_find_replace_24dp',
        'ic_fingerprint_24dp',
        'ic_fitness_center_24dp',
        'ic_flight_land_24dp',
        'ic_flight_takeoff_24dp',
        'ic_flip_to_back_24dp',
        'ic_flip_to_front_24dp',
        'ic_free_breakfast_24dp',
        'ic_g_translate_24dp'
      ];
    }
    if (selectedSeaction === 'secSeaction') {
      this.autoClose = false;
      this.selectedSeaction = 'secSeaction';
      this.iconNames = [
        'ic_gavel_24dp',
        'ic_get_app_24dp',
        'ic_gif_24dp',
        'ic_golf_course_24dp',
        'ic_grade_24dp',
        'ic_group_work_24dp',
        'ic_help_outline_24dp',
        'ic_highlight_off_24dp',
        'ic_history_24dp',
        'ic_home_24dp',
        'ic_hot_tub_24dp',
        'ic_hourglass_empty_24dp',
        'ic_hourglass_full_24dp',
        'ic_https_24dp',
        'ic_if_10_1516234_24dp',
        'ic_important_devices_24dp',
        'ic_info_24dp',
        'ic_info_outline_24dp',
        'ic_input_24dp',
        'ic_inv_ic_24dp',
        'ic_invert_colors_24dp',
        'ic_kitchen_24dp',
        'ic_la_ic_24dp',
        'ic_label_24dp',
        'ic_label_outline_24dp',
        'ic_language_24dp',
        'ic_launch_24dp',
        'ic_library_books_white_24dp',
        'ic_lightbulb_outline_24dp',
        'ic_line_style_24dp',
        'ic_line_weight_24dp',
        'ic_list_24dp',
        'ic_location_city_24dp',
        'ic_lock_24dp',
        'ic_lock_open_24dp',
        'ic_lock_outline_24dp',
        'ic_loyalty_24dp',
        'ic_markunread_mailbox_24dp',
        'ic_mood_24dp',
        'ic_mood_bad_24dp',
        'ic_motorcycle_24dp',
        'ic_note_add_24dp',
        'ic_notifications_24dp',
        'ic_notifications_active_24dp',
        'ic_notifications_none_24dp',
        'ic_notifications_off_24dp',
        'ic_notifications_paused_24dp',
        'ic_offline_pin_24dp',
        'ic_opacity_24dp',
        'ic_open_in_browser_24dp',
        'ic_open_in_new_24dp',
        'ic_open_with_24dp',
        'ic_outline_access_time_24dp',
        'ic_outline_mode_comment_24dp',
        'ic_outline_rss_feed_24dp',
        'ic_outline_share_24dp',
        'ic_outline_visibility_24dp',
        'ic_pages_24dp',
        'ic_pageview_24dp',
        'ic_pan_tool_24dp',
        'ic_party_mode_24dp',
        'ic_payment_24dp',
        'ic_people_24dp',
        'ic_people_outline_24dp',
        'ic_perm_camera_mic_24dp',
        'ic_perm_contact_calendar_24dp',
        'ic_perm_data_setting_24dp',
        'ic_perm_device_information_24dp',
        'ic_perm_identity_24dp',
        'ic_perm_phone_msg_24dp',
        'ic_perm_scan_wifi_24dp',
        'ic_person_24dp',
        'ic_person_add_24dp',
        'ic_person_outline_24dp',
        'ic_pets_24dp',
        'ic_picture_in_picture_24dp',
        'ic_picture_in_picture_alt_24dp',
        'ic_play_for_work_24dp',
        'ic_poll_24dp',
        'ic_polymer_24dp',
        'ic_pool_24dp',
        'ic_power_settings_new_24dp',
        'ic_pregnant_woman_24dp',
        'ic_print_24dp',
        'ic_public_24dp',
        'ic_query_builder_24dp',
        'ic_question_answer_24dp',
        'ic_raise_your_hand_to_ask_24dp',
        'ic_receipt_24dp',
        'ic_record_voice_over_24dp',
        'ic_redeem_24dp',
        'ic_remove_shopping_cart_24dp',
        'ic_reorder_24dp',
        'ic_report_problem_24dp',
        'ic_restore_24dp',
        'ic_restore_page_24dp',
        'ic_room_24dp',
        'ic_room_service_24dp',
        'ic_rounded_corner_24dp',
        'ic_rowing_24dp'
      ];
    }
    if (selectedSeaction === 'thirdSeaction') {
      this.autoClose = false;
      this.selectedSeaction = 'thirdSeaction';
      this.iconNames = [
        'ic_rv_hookup_24dp',
        'ic_schedule_24dp',
        'ic_school_24dp',
        'ic_search_24dp',
        'ic_sentiment_dissatisfied_24dp',
        'ic_sentiment_neutral_24dp',
        'ic_sentiment_satisfied_24dp',
        'ic_sentiment_very_dissatisfied_24dp',
        'ic_sentiment_very_satisfied_24dp',
        'ic_settings_24dp',
        'ic_settings_applications_24dp',
        'ic_settings_backup_restore_24dp',
        'ic_settings_bluetooth_24dp',
        'ic_settings_brightness_24dp',
        'ic_settings_cell_24dp',
        'ic_settings_ethernet_24dp',
        'ic_settings_input_antenna_24dp',
        'ic_settings_input_component_24dp',
        'ic_settings_input_composite_24dp',
        'ic_settings_input_hdmi_24dp',
        'ic_settings_input_svideo_24dp',
        'ic_settings_overscan_24dp',
        'ic_settings_phone_24dp',
        'ic_settings_power_24dp',
        'ic_settings_remote_24dp',
        'ic_settings_voice_24dp',
        'ic_share_24dp',
        'ic_shop_24dp',
        'ic_shop_two_24dp',
        'ic_shopping_basket_24dp',
        'ic_shopping_cart_24dp',
        'ic_smoke_free_24dp',
        'ic_smoking_rooms_24dp',
        'ic_spa_24dp',
        'ic_speaker_notes_24dp',
        'ic_speaker_notes_off_24dp',
        'ic_spellcheck_24dp',
        'ic_store_24dp',
        'ic_subject_24dp',
        'ic_supervisor_account_24dp',
        'ic_swap_horiz_24dp',
        'ic_swap_vert_24dp',
        'ic_swap_vertical_circle_24dp',
        'ic_system_update_alt_24dp',
        'ic_tab_24dp',
        'ic_tab_unselected_24dp',
        'ic_theaters_24dp',
        'ic_thumb_down_24dp',
        'ic_thumb_up_24dp',
        'ic_thumbs_up_down_24dp',
        'ic_timeline_24dp',
        'ic_toc_24dp',
        'ic_today_24dp',
        'ic_toll_24dp',
        'ic_touch_app_24dp',
        'ic_track_changes_24dp',
        'ic_translate_24dp',
        'ic_trending_down_24dp',
        'ic_trending_flat_24dp',
        'ic_trending_up_24dp',
        'ic_turned_in_24dp',
        'ic_turned_in_not_24dp',
        'ic_update_24dp',
        'ic_verified_user_24dp',
        'ic_view_agenda_24dp',
        'ic_view_array_24dp',
        'ic_view_carousel_24dp',
        'ic_view_column_24dp',
        'ic_view_day_24dp',
        'ic_view_headline_24dp',
        'ic_view_list_24dp',
        'ic_view_module_24dp',
        'ic_view_quilt_24dp',
        'ic_view_stream_24dp',
        'ic_view_week_24dp',
        'ic_visibility_24dp',
        'ic_visibility_off_24dp',
        'ic_watch_later_24dp',
        'ic_whatshot_24dp',
        'ic_window_24dp',
        'ic_work_24dp',
        'ic_youtube_searched_for_24dp',
        'ic_zoom_in_24dp',
        'ic_zoom_out_24dp',
        'ic_feeds_books_white_24_dp',
        'ic_check_circle_red_24_px',
        'ic_invites_red_24_px',
        'ic_local_play_24_px',
        'ic_star_red_24_px',
        'ic_live_tv_24dp',
        'ic_question_answer_24dp',
        'ic_ball_24_dp'
      ];
    }
  }

  autoCloseDisplay() {
    this.autoClose = true;
    console.log(this.autoClose);
  }

  selectItem(item: string) {
    this.svgPath = { ...this.svgPath, name: item };
    console.log(this.svgPath)
  }

  updateItemIconEvent(value: string) {
    this.selectItem(value);
    this.showMenu();
    this.updateItemIconNotify.emit(value);
  }

  showMenu() {
    if (this.showIconsMenu == true) {
      this.showIconsMenu = false;
    } else {
      this.showIconsMenu = true;
    }
  }

  get iconFirstTabStyle() {
    if (this.selectedSeaction === 'firstSeaction') {
      return { 'box-shadow': '0 0 16px 0 rgba(0, 0, 0, 0.25)' };
    }

    return;
  }

  get iconSecTabStyle() {
    if (this.selectedSeaction === 'secSeaction') {
      return { 'box-shadow': '0 0 16px 0 rgba(0, 0, 0, 0.25)' };
    }

    return;
  }

  get iconThirdTabStyle() {
    if (this.selectedSeaction === 'thirdSeaction') {
      return { 'box-shadow': '0 0 16px 0 rgba(0, 0, 0, 0.25)' };
    }

    return;
  }

  updateMinDate(e: any){
    this.container = e;
  }
}









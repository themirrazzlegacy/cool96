/*
A usefull library for get file drop events.
*/



class FileDropEvent extends Event {
  constructor() {
    super()
  }
}

class DroppableTextbox {
  constructor() {
    this.evtEmitListeners=[];
    this.el=document.createElement('input');
    var el$=this.el;
    this.el.type='text';
    this.el.className="exp-file-view dropzone droppable-text-input";
    this.el.associatedDropZone=this;
    this.el.dzone={
      data:"DropZone:/dropableInput/SingeLineTextArea",
      accepts:['shell-icon'],
      ondrop:function(e,t){
        var evt=new FileDropEvent();
        evt.filePath=e.getAttribute('path')
        el$.associatedDropZone.emit(
          "drop",
          [
            evt
          ]
        )
      }
    }
  }
  emit(evt,args){
    var lst=this.evtEmitListeners;
    for(var i=0;i<lst.length;i++){
      try{
        if(lst[i].eventId=evt){
          lst[i].trigger(...args);
        }
      }catch(e){null}
    }
  }
  on(evt,func){
    this.evtEmitListeners.push({
      eventId:evt,
      trigger:func
    })
  }
  getElement() {
    return this.el
  }
}

class DroppableTextarea {
  constructor() {
    this.evtEmitListeners=[];
    this.el=document.createElement('textarea');
    var el$=this.el;
    this.el.type='text';
    this.el.className="exp-file-view dropzone droppable-text-area";
    this.el.associatedDropZone=this;
    this.el.dzone={
      data:"DropZone:/dropableInput/MultiLineTextArea",
      accepts:['shell-icon'],
      ondrop:function(e,t){
        var evt=new FileDropEvent();
        evt.filePath=e.getAttribute('path')
        el$.associatedDropZone.emit(
          "drop",
          [
            evt
          ]
        )
      }
    }
  }
  emit(evt,args){
    var lst=this.evtEmitListeners;
    for(var i=0;i<lst.length;i++){
      try{
        if(lst[i].eventId=evt){
          lst[i].trigger(...args);
        }
      }catch(e){null}
    }
  }
  on(evt,func){
    this.evtEmitListeners.push({
      eventId:evt,
      trigger:func
    })
  }
  getElement() {
    return this.el
  }
}

class DroppableImage {
  constructor(src) {
    this.evtEmitListeners=[];
    this.el=document.createElement('img');
    this.el.src=src;
    var el$=this.el;
    this.el.type='text';
    this.el.className="exp-file-view dropzone droppable-html-image";
    this.el.associatedDropZone=this;
    this.el.dzone={
      data:"DropZone:/dropableImage/Image",
      accepts:['shell-icon'],
      ondrop:function(e,t){
        var evt=new FileDropEvent();
        evt.filePath=e.getAttribute('path')
        el$.associatedDropZone.emit(
          "drop",
          [
            evt
          ]
        )
      }
    }
  }
  emit(evt,args){
    var lst=this.evtEmitListeners;
    for(var i=0;i<lst.length;i++){
      try{
        if(lst[i].eventId=evt){
          lst[i].trigger(...args);
        }
      }catch(e){null}
    }
  }
  on(evt,func){
    this.evtEmitListeners.push({
      eventId:evt,
      trigger:func
    })
  }
  getElement() {
    return this.el
  }
  setSource(url) {
    this.el.src=url
  }
  async setSourceToFile(path) {
    var blob=await w96.FS.toBlob(path);
    this.setSource(URL.createObjectURL(blob));
  }
}

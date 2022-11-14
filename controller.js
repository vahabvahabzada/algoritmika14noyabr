class Message{
    constructor(author,sendDate,messageText){
        this.author=author;
        this.sendDate=sendDate;
        this.messageText=messageText;
    }
    toString(){
        console.log(`{author:${this.author},sendDate:${this.sendDate},messageText:${this.messageText}}`);
    }
}

class Messenger/* extends Message*/{
    constructor(){
        this.messages=[];
    }
    send(author,messageText){
        let d=Date();
        let ob=new Message(author,d.substring(d.indexOf(':')-2,d.indexOf(':')+3),messageText);
        //console.log(ob);
        this.messages.push(ob);  
    }
    show_history(){
        //console.log('works');
        for(let i=0;i<this.messages.length;i++){
            //console.log('works');
            console.log(this.messages[i].sendDate+' '+this.messages[i].author+": "+this.messages[i].messageText);
            //console.log('works');
        }
    }
}

let messenger=new Messenger();
messenger.send('Adil','21:00','ilk mesaj');
messenger.send('Meryem','22:00','Ikinci mesaj');
messenger.show_history();
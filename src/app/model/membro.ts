export class Membro {
	nomeProprio:string;
	apelido:string;
	dataNascimento:string;
	email:string;
	rua:string;
	cidade:string;
	telemovel:string;
	bi:string;
	genero:string;

	constructor(){}
}
export class Membroresposta{
	_id: string;
    First_Name:string;
    Last_Name:string;
    Date_of_Birth:string;
    Bi:string;
    Phone:string;
    Street:string;
    Email:string;
    City: string;
}
export class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
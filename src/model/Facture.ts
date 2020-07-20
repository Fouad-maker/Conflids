import { commande } from 'src/model/Commande';

export class facture{
    id:String
    mat: any
	dateFact: any; 
	tva: any;
	remiseFact: any; 
	totalTva: any; 
    totalTtc: any; 
    commandeLiv: commande ={mat:"",totalCmd:"",dateCmd:"",modePaiement:"",ligneCmd:[{
        mat:"",  qteArtLC:0 ,article:{mat:"",designtationArt:"",imageName:"",descriptionArt:"",prixArt:0,qteStockArt:0,tauxRemiseArt:0,marqueArt:{mat:"",libelleMarq:""}
        ,sousCategorieArt:{mat:"",libelleSousCat:""},fournisseurArt:{}}
    }],
    lignelivraison:{mat:"",dateLiv:"", livraison:{mat:"",modeLiv:""}},client:{id  : ' ' ,
    mat : ' ',
    username : ' ' ,
    cin : ' ' ,
    phoneNumber : ' ' ,
    password : ' ' ,
    address : ' ' }};
	
}
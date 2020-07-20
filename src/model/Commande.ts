import { LigneCommande } from './LigneCommande';
import { Articles } from './Articles';
import { LigneLivraison } from './LigneLivraison';
import { Client } from 'src/app/models/client';

export class commande {
    mat:any;
    totalCmd:any ;
    dateCmd: any;
    modePaiement : any;
    ligneCmd : LigneCommande[]= [{
        mat:"",  qteArtLC:0 ,article:{mat:"",designtationArt:"",imageName:"",descriptionArt:"",prixArt:0,qteStockArt:0,tauxRemiseArt:0,marqueArt:{mat:"",libelleMarq:""}
        ,sousCategorieArt:{mat:"",libelleSousCat:""},fournisseurArt:{}}
    }];
    lignelivraison : LigneLivraison={mat:"",dateLiv:"", livraison:{mat:"",modeLiv:""}}
    client: Client={  id  : ' ' ,
    mat : ' ',
    username : ' ' ,
    cin : ' ' ,
    phoneNumber : ' ' ,
    password : ' ' ,
    address : ' ' 
    }
    
}
import { Marque } from './Marque';
import { SousCategorie } from './SousCategorie';
import { Fournisseur } from './Fournisseur';
import { ImageModel } from './imageModel';

export class Articles{
mat:string='';
designtationArt: string='';
descriptionArt: string='';
prixArt: number=0;
qteStockArt:number=0;
tauxRemiseArt:number=0;
	imageName:string;			
	
marqueArt:Marque={mat:"",libelleMarq:""};
    
sousCategorieArt:SousCategorie={mat:"", libelleSousCat:""};
fournisseurArt:Fournisseur={};	
	
	
/*imageModel:ImageModel={ mat : "" ,
    id : "" ,
    name : "" ,
    type : "" } ; */
    
}
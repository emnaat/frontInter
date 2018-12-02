export default interface Imprimante {
  numserie?: String;
  marque?: String;
  deffectueux?: Boolean;
  datemiseservice?: Date;
  fingarantie?: Date;
  utilisateur?: Utilisateurs;
  cartouche?: String;
  type: String;

}

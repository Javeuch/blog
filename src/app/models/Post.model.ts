export class Post {


  /* les attributs placés dans le constructor avec public devant */
  constructor(
    public id       : number,
    public title    : string,
    public content: string,
    public createAt: string
  ) { }
}

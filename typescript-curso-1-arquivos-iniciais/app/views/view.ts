export abstract class View<T> {

    protected elemento: HTMLElement;
    
    private scape = false; 

    constructor(seletor: string, scape?: boolean) {

        const elemento = document.querySelector(seletor);

        if(elemento) {

            this.elemento = elemento as HTMLElement;

        } else {

            throw Error (`The selector ${seletor} does not exist in Dom. Check!`);

        }

        if(scape){

            this.scape = scape;

        }

    }
    
    public update(model: T): void {
        
        let template = this.template(model);
        if(this.scape) {

            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');

        } 

        this.elemento.innerHTML = template;
        
    };
    
    protected abstract template(model: T): string; 
    
}
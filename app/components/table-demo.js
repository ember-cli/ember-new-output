import Component from '@glimmer/component';

export default class TableDemoComponent extends Component {

    rules = [];

    constructor() {
        super(...arguments);

        this.rules = [
            {
                name:"Suppress Accesories",
                priority:1,
                type:"R",
                intent:"REFINE",
                condition:"Contains 'Summer'",
                action:"SEARCH",
                dateRange:"1/10/19 - 31/1/20",
                enabled:true,
                selected:false
            },
            {
                name:"Promote Accesories",
                priority:2,
                type:"Q1",
                intent:"NAV_CART",
                condition:"Contains 'christmas'",
                action:"SEARCH",
                dateRange:"1/10/19 - 31/1/20",
                enabled:true,
                selected:true
            },

        ];

    }

}

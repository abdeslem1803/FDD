
//document.documentElement.style.overflow = 'hidden';

var app = new Vue({
	el: '#app',
	data: {
		tab: 1,
		tbh: 64,
		isActive: true,
		img : false,
		docdialog: false,
		booldesc: [ ],
		vectdesc: [ ],
		vectpages: 1,
		vectpage: 1,
		pagesize: 8,
		key:0,
		vectmode: "1",
		selectedItem: 1,
		select_1: 'age',
		select_2: 'anaemia',
		dialog: false ,
		diabet:{state:'OUI',value:1},
		amenea:{state:'OUI',value:1},
		khra:{state:'OUI',value:1},
		items: [
        'age','anaemia','creatinine_phosphokinase','diabetes','ejection_fraction','high_blood_pressure'
			,'platelets','serum_creatinine','serum_sodium','sex','smoking','time','DEATH_EVENT'],
		class_pro: [{state:'OUI',value:1},
		{state:'Non',value:0},
	],
	},
	computed : {
		//tb_height: function() { if (this.isMounted) console.log(this.$refs.tb.computedHeight); return 0; },
	},
	methods: {
		select_tab: function(selected) {
			this.tab = selected;
			this.img = false;
		},
		afficher:async function(){
			this.select_tab(2);
			let tak =await eel.py_2_column_cor(this.select_1,this.select_2);
			this.key++;
			this.img = true;
		},
		process_search: async function(){
			let pred = await eel.py_2_SVC(0,0,0,13,this.vectmode)();
			alert(pred);
		},
	},
	mounted: function() {
		this.isMounted = true;
	},
});



/*
eel.describe_token("computer")(display_results);
function display_results(token) {
	document.getElementById('description').innerHTML = "freq: "+token["freq"]+" weight: "+token["weight"] ;
}
*/

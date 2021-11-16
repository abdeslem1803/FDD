
//document.documentElement.style.overflow = 'hidden';

var app = new Vue({
	el: '#app',
	data: {
		tab: 1,
		tbh: 64,
		isActive: true,
		docdialog: false,
		booldesc: [ ],
		vectdesc: [ ],
		vectpages: 1,
		vectpage: 1,
		pagesize: 8,
		vectmode: "IP",
		selectedItem: 1,
		select_1: 'age',
		select_2: 'anaemia',
      items: [
        'age','anaemia','creatinine_phosphokinase','diabetes','ejection_fraction','high_blood_pressure'
			,'platelets','serum_creatinine','serum_sodium','sex','smoking','time','DEATH_EVENT'],
	},
	computed : {
		//tb_height: function() { if (this.isMounted) console.log(this.$refs.tb.computedHeight); return 0; },
	},
	methods: {
		select_tab: function(selected) {
			this.tab = selected;
		},
		afficher: function(event){
			eel.py_affiche()
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

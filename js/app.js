var vm = new Vue({
   el: '#databinding',
   data: {
      name:'',
      currencyfrom : [
      {name : "USD", desc:"US Dollar"},
      {name:"EUR", desc:"Euro"},
      {name:"INR", desc:"Indian Rupee"},
      {name:"BHD", desc:"Bahraini Dinar"},
      {name:"IDR", desc:"Indonesian Rupiah"}
      ],
      convertfrom: "IDR",
      convertto:"USD",
      amount :0,
      table: [],
      tmp: [],
      final: 0,
      tampil: 'Tampilkan lebih banyak',
      tp: true
   },
   computed :{
      finalamount:function() {
         var to = this.convertto;
         var from = this.convertfrom;
         // var final;
         switch(from) {
            case "INR":
            if (to == "USD") {
               this.final = this.amount * 0.016;
            }
            if (to == "EUR") {
               this.final = this.amount * 0.013;
            }
            if (to == "INR") {
               this.final = this.amount;
            }
            if (to == "BHD") {
               this.final = this.amount * 0.0059;
            }
            if (to == "IDR") {
               this.final = this.amount *207.74;
            }
            
            break;
            case "USD":
            if (to == "INR") {
               this.final = this.amount * 63.88;
            }
            if (to == "EUR") {
               this.final = this.amount * 0.84;
            }
            if (to == "USD") {
               this.final = this.amount;
            }
            if (to == "BHD") {
               this.final = this.amount * 0.38;
            }
            if (to == "IDR") {
               this.final = this.amount * 15190.65;
            }
            break;
            case "EUR":
            if (to == "INR") {
               this.final = this.amount * 76.22;
            }
            if (to == "USD") {
               this.final = this.amount * 1.19;
            }
            if (to == "EUR") {
               this.final = this.amount;
            }
            if (to == "BHD") {
               this.final = this.amount * 0.45;
            }
            if (to == "IDR") {
               this.final = this.amount * 17353.11;
            }
            break;
            case "BHD":
            if (to == "INR") {
               this.final = this.amount *169.44;
            }
            if (to == "USD") {
               this.final = this.amount * 2.65;
            }
            if (to == "EUR") {
               this.final = this.amount * 2.22;
            }
            if (to == "BHD") {
               this.final = this.amount;
            }
            if (to == "IDR") {
               this.final = this.amount * 40309.91;
            }
            break;
            case "IDR":
            if (to == "INR") {
               this.final = this.amount * 0.0048;
            }
            if (to == "USD") {
               this.final = this.amount * 0.000066;
            }
            if (to == "EUR") {
               this.final = this.amount * 0.000058;
            }
            if (to == "BHD") {
               this.final = this.amount * 0.000025;
            }
            if (to == "IDR") {
               this.final = this.amount;
            }
            break;
         }
         return this.final;
      }
   },
   methods: {
      save: function () {
         // this.tmp = [this.convertfrom, this.convertto, this.nominal, this.final, new Date().getTime()]
         var tgl = new Date()
         this.tmp['dari'] = this.convertfrom
         this.tmp['ke'] = this.convertto
         this.tmp['nominal'] = this.amount + ' ' +this.convertfrom
         this.tmp['hasil'] = this.final
         this.tmp['created'] = tgl
         this.table.push(this.tmp)
         this.tmp = []
      },

      tambah: function () {
         this.tp = !this.tp
         if (this.tp == true) {
            this.tampil = 'Tampilkan lebih banyak'
         } else {
            this.tampil = 'Tampilkan lebih sedikit'
         }
      },
      clear: function () {
         this.table = []
      }
   }
});
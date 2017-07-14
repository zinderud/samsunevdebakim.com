import { Component, OnInit } from "@angular/core";
import { Routes } from "@angular/router";
import { Meta, Title,  } from '@angular/platform-browser';

@Component({
  selector: "rb-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    public title: String = 'samsun evde bakım  hizmetleri';
  public homeRoutes: Routes = [
    {
      path: "Hizmetlerimiz",
      data: {
        label: "Hizmetlerimiz",
        icerik:
          " Hasta, yaşlı ve yara bakımı gibi hizmetleri sizlere sunmaktayız."
      }
    },
    {
      path: "Amacimiz",
      data: {
        label: "Amacımız",
        icerik:
          "Yüksek standartlarda ,yaşam akışını bozmadan kişiye özel hizmet sağlar"
      }
    },
    {
      path: "Bizkimiz",
      data: {
        label: "Bizkimiz",
        icerik:
          " 'Samsun Evde Bakım' Alanında uzman ve deneyimli bir ekip tarafından planlanmış ve 'KOŞULSUZ HİZMET' ilkesini benimsemiş bir projedir."
      }
    },
    {
      path: "Tanisma",
      data: {
        label: "Tanisma",
        icerik:
          "'Samsun Evde Bakım' olarak  7/24 her türlü sağlık hizmetlerini profesyonelce yapıyoruz."
      }
    }
  ];
  random: number;

  constructor(meta: Meta, title: Title) {
        title.setTitle('samsun evde bakım ');

    meta.addTags([
      { name: 'author',   content: 'zinderud'},
      { name: 'keywords', content: 'samsun Evde bakım,Samsun Hasta bakım, yara bakım'},
      { name: 'description ', content: 'samsun evde bakım hizmetleri  Hastanede refakat hizmeti Dekübit ,cerrahi yaralar gibi pansuman ihtiyaçlarinin sağlanmasi, Sonda takma işlemi ve bakımı Kolonostomi bakımı Bası ülseri ( Yatak yarası ) oluşmaması için önleyici uzman hemşire ziyareti, hasta/aile eğitimi Evde enjeksiyon uygulaması , Reçetesi olan ev hastalarında planlanır , serum hazirlama ve uygulama ıv ilaç ugulamalari , Hasta ve yaşlılarımızın ihtiyaçları doğrultusunda her türlü bakım ve sağlık desteği verilmektedir ' }
    ]);

 
  }

  ngOnInit() {
    this.random = this.getRandomInt(1, 5);
  }

  getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

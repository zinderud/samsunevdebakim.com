import { Component, OnInit } from "@angular/core";
import { Routes } from "@angular/router";

@Component({
  selector: "rb-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {
    this.random = this.getRandomInt(1, 5);
  }

  getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

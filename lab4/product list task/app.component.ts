import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-component',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h40/hde/85253298913310.jpg?format=gallery-medium',
      name: 'Refregerator LG GC-B459MLWM серый',
      description: 'Multi functional refregerator with large variation',
      rating: 4.25,
      link: 'https://kaspi.kz/shop/p/lg-gc-b459mlwm-seryi-116895924/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h4a/84701020356638.jpg?format=gallery-medium',
      name: 'Surface for computer mouse Inova Death Life',
      description: 'compact and also very usefull surface for every mouse ',
      rating: 4.99,
      link: 'https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      name: ' Xiaomi Redmi 13C 8 ГБ/256 ГБ black',
      description: 'popular model of smartphone',
      rating: 3.5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hea/h8f/80794403635230.jpg?format=gallery-medium',
      name: 'Batery AAA Duracell 12 ',
      description: 'some batery for large count of technice',
      rating: 4.78,
      link: 'https://kaspi.kz/shop/p/batareika-aaa-duracell-12-sht-110389394/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/h0c/64155521777694.jpg?format=gallery-medium',
      name: 'Headphone Samsung Galaxy Buds 2 SM-R177NZKACIS ',
      description: 'Best variant with best ratio price and quality',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-2-sm-r177nzkacis-chernyi-102046373/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/hf3/66594300821534.jpg?format=gallery-medium',
      name: 'МФУ Epson EcoTank L3250',
      description: 'normal and very good printer',
      rating: 4.38,
      link: 'https://kaspi.kz/shop/p/mfu-epson-ecotank-l3250-107929066/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
      name: 'vacumcleaner Deerma DX700',
      description: 'compact and powerfull vacumcleaner for home',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hd6/82992821239838.jpg?format=gallery-medium',
      name: 'Dyson HS05 Airwrap Complete Long Gift Edition стайлер 1300 Вт',
      description: 'ideal variant like a gift for any woman',
      rating: 4.85,
      link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-gift-edition-stailer-1300-vt-112707564/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
      name: 'washing machine LG F2J3NS0W белый',
      description: 'washing machine which give a second chance for anyone clothes.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000'
    },    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6b/h88/64349678829598.jpg?format=gallery-medium',
      name: 'TV LG 43LM5772PLA 109 см черный',
      description: 'large and long TV for best expireance.',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000'
    }

  ];

  share(productLink: string) {
    const message = encodeURIComponent(`Look that product: ${productLink}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    const telegramUrl = `https://t.me/share/url?url=${productLink}`;

    window.open(whatsappUrl, '_blank');
    //window.open(telegramUrl, '_blank');
  }
}

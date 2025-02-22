import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../ProductItem/product-item.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() category: string = '';

  productsByCategory = {
    Electronics: [
      { 
        name: 'Laptop', 
        likes: 0, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        description: 'Ноутбук Apple MacBook Air 13 2022.',
        rating: 4.5,
        productUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      },
      { 
        name: 'Smartphone', 
        likes: 3, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        description: 'Смартфон Apple iPhone 13 128Gb черный',
        rating: 4.7,
        productUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      },
      { 
        name: 'Wifi', 
        likes: 11, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
        description: 'Wi-Fi роутер TP-LINK TD-W8961N',
        rating: 4.7,
        productUrl: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000',
      },
      { 
        name: 'USB flash card', 
        likes: 485, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/ha7/65112949096478.jpg?format=gallery-medium',
        description: 'USB Kingston DTXM/128GB',
        rating: 4.7,
        productUrl: 'https://kaspi.kz/shop/p/kingston-dtxm-128gb-128-gb-105073150/?c=750000000',
      },
      { 
        name: 'WEBcamera', 
        likes: 985, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h48/h3f/85800974483486.jpg?format=gallery-medium',
        description: 'Веб-камера Webcam',
        rating: 4.7,
        productUrl: 'https://kaspi.kz/shop/p/webcam-108326070/?c=750000000',
      }
    ],
    'Home Appliances': [
      { 
        name: 'Пылесос Deerma DX700 белый', 
        likes: 8, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
        description: 'Super and mega power vacumcleaner.',
        rating: 4.2,
        productUrl: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
      },
      { 
        name: 'Microwave', 
        likes: 19, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h8e/87138526363678.jpg?format=gallery-medium',
        description: 'Микроволновая печь Hansa AMMF19M1BH ',
        rating: 4.6,
        productUrl: 'https://kaspi.kz/shop/p/hansa-ammf19m1bh-chernyi-123644203/?c=750000000',
      },
      { 
        name: 'Electric keatle', 
        likes: 127, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium',
        description: 'Электрочайник BEREKE BR-810 серый',
        rating: 4.6,
        productUrl: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
      },
      { 
        name: 'Electrogrille', 
        likes: 23, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/h3f/87089997873182.jpg?format=gallery-medium',
        description: 'Xiaomi Smart Air Fryer 6.5L BHR7357EU',
        rating: 4.6,
        productUrl: 'https://kaspi.kz/shop/p/elektrogril-xiaomi-smart-air-fryer-6-5l-bhr7357eu-118273472/?c=750000000',
      },
      { 
        name: 'Electro scale', 
        likes: 78, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/h9a/80584469872670.jpg?format=gallery-medium',
        description: 'Кухонные весы  3KG серый.',
        rating: 4.6,
        productUrl: 'https://kaspi.kz/shop/p/kitchen-digital-scale-3kg-seryi-110166616/?c=750000000',
      }
    ],
    Accessories: [
      { 
        name: 'Headphones', 
        likes: 55, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
        description: 'Наушники Apple AirPods 4 белый',
        rating: 4.8,
        productUrl: 'https://kaspi.kz/shop/p/apple-airpods-4-belyi-124333372/?c=750000000',
      },
      { 
        name: 'Charger', 
        likes: 93, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-large',
        description: 'Apple 18W USB-C Power Adapter USB Type-C белый',
        rating: 4.3,
        productUrl: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
      },
      { 
        name: 'USB Cable', 
        likes: 0, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=gallery-medium',
        description: ' Apple Lightning (M), USB TypeC (M)',
        rating: 4.3,
        productUrl: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000',
      },
      { 
        name: 'Glass for phone', 
        likes: 11, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h3b/67897720340510.jpg?format=gallery-medium',
        description: 'Стекло для Apple iPhone 11 черный',
        rating: 4.3,
        productUrl: 'https://kaspi.kz/shop/p/steklo-dlja-apple-iphone-11-chernyi-108450817/?c=750000000',
      },
      { 
        name: 'PowerBamk', 
        likes: 0, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/haf/64188366487582.jpg?format=gallery-medium',
        description: 'Xiaomi Mi Power Bank 3 Ultra Compact 10000 мАч.',
        rating: 4.3,
        productUrl: 'https://kaspi.kz/shop/p/xiaomi-mi-power-bank-3-ultra-compact-10000-mach-chernyi-101800648/?c=750000000',
      }
    ],
    Gaming: [
      { 
        name: 'Gaming laptop', 
        likes: 48, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
        description: 'ThundeRobot 911S Core.',
        rating: 5.0,
        productUrl: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
      },
      { 
        name: 'VR Headset', 
        likes: 15, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h4d/64116727316510.jpg?format=gallery-medium',
        description: 'Meta Quest 2 256 GB.',
        rating: 4.9,
        productUrl: 'https://kaspi.kz/shop/p/meta-quest-2-256-gb-100983000/?c=750000000',
      },
      { 
        name: 'Monitor', 
        likes: 42, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h28/hfc/83298067742750.jpg?format=gallery-medium',
        description: 'ThundeRobot DF27C240L черный.',
        rating: 4.9,
        productUrl: 'https://kaspi.kz/shop/p/thunderobot-df27c240l-chernyi-112895678/?c=750000000',
      },
      { 
        name: 'CARPET FOR GAMING MOUSE', 
        likes: 52, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he9/hbc/79798659809310.jpg?format=gallery-medium',
        description: ' Art Strata 900x400x3 рисунок.',
        rating: 4.9,
        productUrl: 'https://kaspi.kz/shop/p/art-strata-900x400x3-risunok-109753958/?c=750000000',
      },
      { 
        name: 'Gaming mouse', 
        likes: 0, 
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
        description: ' Logitech G102 Lightsync черный',
        rating: 4.9,
        productUrl: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
      }
    ]
  };

  get products() {
    return this.productsByCategory[this.category as keyof typeof this.productsByCategory] || [];
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
  likeProduct(product: { name: string; likes: number }) {
    product.likes++;
  }
  shareProduct(product: any) {
    const shareText = `Смотрите ${product.name}! ${product.productUrl}`;
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Ссылка скопирована!');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinGeckoService } from '../coin-gecko.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  coin: any | undefined;
  coinDescription: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private coinGecko: CoinGeckoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCoinDetails();
  }

  getCoinDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.coinGecko.getSpecificCoin(id)
      .subscribe((coin: any) => {
        this.coin = coin
        this.coinDescription = coin?.description['en']
        console.log(coin)
      })

  }

  goBack(): void {
    this.location.back();
  }
}
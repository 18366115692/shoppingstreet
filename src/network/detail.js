import { request } from './request'

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.realPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.serveices = services;
  }
}

export class Shop {
  constructor(ShopInfo) {
    this.logo = ShopInfo.shopLogo
    this.name = ShopInfo.name
    this.fans = ShopInfo.cFans
    this.sells = ShopInfo.cSells
    this.score = ShopInfo.score
    this.goodsCount = ShopInfo.cGoods
    this.allGoods = ShopInfo.allGoodsUrl
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // images可能没有值，所以做判断
    this.images = info.images ? info.images : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    "object": {
      "type": "String"
    },
    "id": {
      "type": "String"
    },
    "oracle_id": {
      "type": "String"
    },
    "multiverse_ids": {
      "type": [
        "Number"
      ]
    },
    "mtgo_id": {
      "type": "Number"
    },
    "arena_id": {
      "type": "Number"
    },
    "tcgplayer_id": {
      "type": "Number"
    },
    "cardmarket_id": {
      "type": "Number"
    },
    "name": {
      "type": "String"
    },
    "lang": {
      "type": "String"
    },
    "released_at": {
      "type": "Date"
    },
    "uri": {
      "type": "String"
    },
    "scryfall_uri": {
      "type": "String"
    },
    "layout": {
      "type": "String"
    },
    "highres_image": {
      "type": "Boolean"
    },
    "image_status": {
      "type": "String"
    },
    "image_uris": {
      "small": {
        "type": "String"
      },
      "normal": {
        "type": "String"
      },
      "large": {
        "type": "String"
      },
      "png": {
        "type": "String"
      },
      "art_crop": {
        "type": "String"
      },
      "border_crop": {
        "type": "String"
      }
    },
    "mana_cost": {
      "type": "String"
    },
    "cmc": {
      "type": "Number"
    },
    "type_line": {
      "type": "String"
    },
    "oracle_text": {
      "type": "String"
    },
    "colors": {
      "type": [
        "String"
      ]
    },
    "color_identity": {
      "type": [
        "String"
      ]
    },
    "keywords": {
      "type": [
        "String"
      ]
    },
    "legalities": {
      "standard": {
        "type": "String"
      },
      "future": {
        "type": "String"
      },
      "historic": {
        "type": "String"
      },
      "timeless": {
        "type": "String"
      },
      "gladiator": {
        "type": "String"
      },
      "pioneer": {
        "type": "String"
      },
      "explorer": {
        "type": "String"
      },
      "modern": {
        "type": "String"
      },
      "legacy": {
        "type": "String"
      },
      "pauper": {
        "type": "String"
      },
      "vintage": {
        "type": "String"
      },
      "penny": {
        "type": "String"
      },
      "commander": {
        "type": "String"
      },
      "oathbreaker": {
        "type": "String"
      },
      "brawl": {
        "type": "String"
      },
      "historicbrawl": {
        "type": "String"
      },
      "alchemy": {
        "type": "String"
      },
      "paupercommander": {
        "type": "String"
      },
      "duel": {
        "type": "String"
      },
      "oldschool": {
        "type": "String"
      },
      "premodern": {
        "type": "String"
      },
      "predh": {
        "type": "String"
      }
    },
    "games": {
      "type": [
        "String"
      ]
    },
    "reserved": {
      "type": "Boolean"
    },
    "foil": {
      "type": "Boolean"
    },
    "nonfoil": {
      "type": "Boolean"
    },
    "finishes": {
      "type": [
        "String"
      ]
    },
    "oversized": {
      "type": "Boolean"
    },
    "promo": {
      "type": "Boolean"
    },
    "reprint": {
      "type": "Boolean"
    },
    "variation": {
      "type": "Boolean"
    },
    "set_id": {
      "type": "String"
    },
    "set": {
      "type": "String"
    },
    "set_name": {
      "type": "String"
    },
    "set_type": {
      "type": "String"
    },
    "set_uri": {
      "type": "String"
    },
    "set_search_uri": {
      "type": "String"
    },
    "scryfall_set_uri": {
      "type": "String"
    },
    "rulings_uri": {
      "type": "String"
    },
    "prints_search_uri": {
      "type": "String"
    },
    "collector_number": {
      "type": "String"
    },
    "digital": {
      "type": "Boolean"
    },
    "rarity": {
      "type": "String"
    },
    "card_back_id": {
      "type": "String"
    },
    "artist": {
      "type": "String"
    },
    "artist_ids": {
      "type": [
        "String"
      ]
    },
    "illustration_id": {
      "type": "String"
    },
    "border_color": {
      "type": "String"
    },
    "frame": {
      "type": "Date"
    },
    "full_art": {
      "type": "Boolean"
    },
    "textless": {
      "type": "Boolean"
    },
    "booster": {
      "type": "Boolean"
    },
    "story_spotlight": {
      "type": "Boolean"
    },
    "edhrec_rank": {
      "type": "Number"
    },
    "preview": {
      "source": {
        "type": "String"
      },
      "source_uri": {
        "type": "String"
      },
      "previewed_at": {
        "type": "Date"
      }
    },
    "prices": {
      "usd": {
        "type": "String"
      },
      "usd_foil": {
        "type": "String"
      },
      "usd_etched": {
        "type": "Mixed"
      },
      "eur": {
        "type": "String"
      },
      "eur_foil": {
        "type": "String"
      },
      "tix": {
        "type": "String"
      }
    },
    "related_uris": {
      "gatherer": {
        "type": "String"
      },
      "tcgplayer_infinite_articles": {
        "type": "String"
      },
      "tcgplayer_infinite_decks": {
        "type": "String"
      },
      "edhrec": {
        "type": "String"
      }
    },
    "purchase_uris": {
      "tcgplayer": {
        "type": "String"
      },
      "cardmarket": {
        "type": "String"
      },
      "cardhoarder": {
        "type": "String"
      }
    }
  });

module.exports = mongoose.model("Cards", cardSchema);

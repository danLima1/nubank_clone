import { CustomMaterialCommunityIcon, CustomMaterialIcon } from "@/components/CustomIcon"
import { FontAwesome6 } from "@expo/vector-icons"

export const Operations = [
    {
        title: "Área Pix",
        icon: <CustomMaterialIcon name="pix" color="black" />
    },
    {
        title: "Pagar",
        icon: <CustomMaterialCommunityIcon name="barcode" color="black" />
    },
    {
        title: "Pegar \n emprestado", // Quebra de linha manual com "\n"
        icon: <FontAwesome6 name="hand-holding-dollar" size={24} color="black" />,
    
    },
    {
        title: "Tranferir",
        icon: <CustomMaterialCommunityIcon name="monitor-share" color="black" />
    },
    {
        title: "Recarga de celular",
        icon: <CustomMaterialIcon name="smartphone" color="black" />
    },
    {
        title: "Depositar",
        icon: <CustomMaterialIcon name="pix" color="black" />
    },
    {
        title: "Investir",
        icon: <CustomMaterialIcon name="signal-cellular-alt" color="black" />
    },
    
]

export const MORE = [
    {
        image: "https://backend.blog.nubank.com.br/wp-content/uploads/2024/02/homem-consultando-aplicativo-nubank-no-celular-e-segurando-cartao-de-credito.jpg?quality=100",
        title: "Nova experiência Nubank+",
        description: "Mais vantagens para aproveitar o seu dia a dia.",
        action: "Seja Nubank+",
        route: ""
    },
    {
        image: "https://img.odcdn.com.br/wp-content/uploads/2022/05/nubank-em-mais-um-rosto.jpg",
        title: "Área de Seguros do Nu",
        description: "Toda proteção para você e para quem você ama num só lugar",
        action: "Conhecer",
        route: ""
    },
    {
        image: "https://startups.com.br/wp-content/uploads/2022/01/nubank-cartao_divulgacao.jpg",
        title: "Indique o Nu para amigos",
        description: "Espalhe como é simples estar no controle.",
        action: "Indicar amigos",
        route: ""
    },
    {
        image: "https://s2-techtudo.glbimg.com/ZmYqpKy5tStKh_MeMQzWagRYw0c=/0x0:1920x1080/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/6/r/UAn5lDS6iBxfyItL4Mhw/design-sem-nome-2024-04-15t163830.601.png",
        title: "Traga seus dados",
        description: "Mais chances de limites e produtos com a sua cara.",
        action: "Saiba mais",
        route: ""
    },
    {
        image: "https://classic.exame.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-14-at-18.42.13.jpeg?quality=70&strip=info&w=1024",
        title: "Termos de uso",
        description: "Explicamos o que diz esse documento do Nubank",
        action: "Conhecer",
        route: ""
    },
    {
        image: "https://tm.ibxk.com.br/2023/02/13/13103639593039.jpg?ims=1200x675",
        title: "Nubank Auto",
        description: "Aproveite seu carro com toda tranquilidade.",
        action: "Simule agora",
        route: ""
    },
]

export const CRIPTOSDATA = [
    {
        name: "Nucoin",
        image: 'https://nucoin.andersu.dev/nucoin.png'
    },
    {
        name: "Bitcoin",
        image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
    }
]

export const INSURANCES = [
    {
        name: "Seguro Vida",
        icon: <CustomMaterialCommunityIcon name="heart-outline" size={22} />,
        isNew: false,
        route: ""
    },
    {
        name: "Seguro Celular",
        icon: <CustomMaterialCommunityIcon name="cellphone" size={22} />,
        isNew: false,
        route: ""
    },
    {
        name: "Seguro Auto",
        icon: <CustomMaterialCommunityIcon name="car-outline" size={22} />,
        isNew: true,
        route: ""
    },
    {
        name: "Seguro Vida",
        icon: <CustomMaterialCommunityIcon name="home-variant-outline" size={22} />,
        isNew: true,
        route: ""
    },
]
export const STOREMENU = [
    {
        title: "Pedidos",
        icon: <CustomMaterialCommunityIcon name="truck-delivery-outline" size={20} color="white" />,
        route: ""
    },
    {
        title: "Cashback",
        icon: <FontAwesome6 name="dollar-sign" size={20} color="white" />,
        route: ""
    },
    {
        title: "Lojas",
        icon: <CustomMaterialCommunityIcon name="office-building" size={20} color="white" />,
        route: ""
    },
    {
        title: "Gift Cards",
        icon: <CustomMaterialCommunityIcon name="wallet-giftcard" size={20} color="white" />,
        route: ""
    },
    {
        title: "Serviços",
        icon: <CustomMaterialCommunityIcon name="toolbox" size={20} color="white" />,
        route: ""
    },
    
]

export const CASHBACKS = [
    {
        platform: {
            name: "Udemy",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/800px-Udemy_logo.svg.png"
        },
        value: 13
    },
    {
        platform: {
            name: "Forever Liss",
            logo: "https://atendimento.foreverliss.com.br/hc/theming_assets/01J1QVNTDKWBBRAF979C8SVM9T"
        },
        value: 15
    },
    {
        platform: {
            name: "Udemy",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/800px-Udemy_logo.svg.png"
        },
        value: 13
    },
    {
        platform: {
            name: "Insider",
            logo: "https://www.insiderstore.com.br/cdn/shop/files/Group_4.png?v=1713295054"
        },
        value: 13
    },
    {
        platform: {
            name: "Vivara",
            logo: "https://logodownload.org/wp-content/uploads/2019/10/vivara-logo-0.png"
        },
        value: 13
    },
    {
        platform: {
            name: "Adcos",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmxjRMtW0yLHyEHMgiRquk69AGaxI_8XaDQ&s"
        },
        value: 13
    },
    {
        platform: {
            name: "Dzarm",
            logo: "https://logodownload.org/wp-content/uploads/2020/01/dzarm-logo-0.png"
        },
        value: 9.4
    },
    {
        platform: {
            name: "Fila",
            logo: "https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Rewrite_Fila_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1694712230"
        },
        value: 5.5
    },
]

export const HERO_IMG = [
    "https://febrai.com.br/uploads/2024/07/nubank-oferece-ate-10-de-cashback-no-amazon-prime-day.webp",
    "https://global.discourse-cdn.com/nubank/optimized/4X/7/7/a/77a432eecdda810752664a658d9c133a38fe541d_2_690x395.jpeg",
    "https://pronatec.pro.br/wp-content/uploads/2022/12/Cashback-Nubank.jpg.webp",
    "https://www.mobills.com.br/blog/wp-content/uploads/2022/12/imagem-destaque-cashback-nubank-mobills.png",

]

export const STORE_PRODUCTS = [
    {
      image: "https://mobileview.pt/wp-content/uploads/2023/03/iphone-13-pro-graphite-select.png",
      name: "iPhone 13 Pro",
      color: "Space Gray",
      price: 6499.99,
      cashback: 104.40
    },
    {
      image: "https://istore.co.na/cdn/shop/products/iPhone13_mini_Starlight_1200x.png?v=1661330897",
      name: "iPhone 13",
      color: "Starlight",
      price: 5499.99,
      cashback: 83.87
    },
    {
      image: "https://images.stockx.com/images/Apple-iPhone-12-Pro-Max-A2411-Global-Version-Pacific-Blue.png?fit=fill&bg=FFFFFF&w=140px&h=75px&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1613765566&q=60",
      name: "iPhone 12 Pro",
      color: "Pacific Blue",
      price: 5999.99,
      cashback: 91.60
    },
    {
      image: "https://loja.imsolutionpe.com.br/wp-content/uploads/2021/10/iphone-12-red-select-2020-1-2.png",
      name: "iPhone 12",
      color: "Coral",
      price: 4999.99,
      cashback: 48.87
    },
    {
      image: "https://mobileview.pt/wp-content/uploads/2013/06/iphone-11-green-site-1-1.png",
      name: "iPhone 11 Pro",
      color: "Midnight Green",
      price: 4499.99,
      cashback: 48.87
    },
    {
      image: "https://www.oficinadanet.com.br/imagens/galeria/544/thumb/iphone-se-red-select-2020-geo-br.png",
      name: "iPhone SE",
      color: "Red",
      price: 3499.99,
      cashback: 35.27
    }
  ];
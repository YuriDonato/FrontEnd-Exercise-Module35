import Menu from '../../models/Menu'

import pizzamarguerita from '../../assets/images/pizzamarguerita.png'
import risotofunghi from '../../assets/images/risotofunghi.jpg'
import lasanhabolonhesa from '../../assets/images/lasanhabolonhesa.jpg'
import bruschettatomate from '../../assets/images/bruschettatomate.jpg'
import polentaragu from '../../assets/images/polentaragu.png'
import tiramisu from '../../assets/images/tiramisu.jpg'

import sushisalmao from '../../assets/images/sushisalmao.jpg'
import tempuracamarao from '../../assets/images/tempuracamarao.jpeg'
import uramakifiladelfia from '../../assets/images/urumakifiladelfia.jpg'
import sashimimisto from '../../assets/images/sashimimisto.jpg'
import yakitorifrango from '../../assets/images/yakitorifrango.jpg'
import misosoup from '../../assets/images/misosoup.jpeg'

export const cardapioItaliano: Menu[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imgurl: pizzamarguerita
  },
  {
    id: 2,
    title: 'Risoto de Funghi',
    description:
      'Risoto cremoso preparado com cogumelos funghi, caldo de legumes, arroz arbóreo e finalizado com parmesão ralado. Uma explosão de sabores!',
    imgurl: risotofunghi
  },
  {
    id: 3,
    title: 'Lasanha Bolonhesa',
    description:
      'Camadas de massa intercaladas com um delicioso molho bolonhesa, molho bechamel e queijo derretido. Uma lasanha feita para impressionar.',
    imgurl: lasanhabolonhesa
  },
  {
    id: 4,
    title: 'Bruschetta de Tomate e Manjericão',
    description:
      'Tradicionais fatias de pão tostado cobertas com tomates frescos, alho, manjericão e regadas com azeite de oliva. Uma entrada leve e saborosa.',
    imgurl: bruschettatomate
  },
  {
    id: 5,
    title: 'Polenta com Ragù de Cordeiro',
    description:
      'Polenta cremosa acompanhada de um ragù suculento de cordeiro cozido lentamente em vinho tinto. Uma combinação rica e reconfortante.',
    imgurl: polentaragu
  },
  {
    id: 6,
    title: 'Tiramisù',
    description:
      'Uma sobremesa clássica italiana feita com camadas de biscoitos champanhe embebidos em café, mascarpone e cacau em pó. Um final perfeito para a refeição.',
    imgurl: tiramisu
  }
]

export const cardapioJapones: Menu[] = [
  {
    id: 1,
    title: 'Sushi de Salmão',
    description:
      'Clássicos e deliciosos sushis de salmão fresco, arroz especial e alga nori, servidos com wasabi e shoyu. Uma explosão de sabores e tradicionalidade!',
    imgurl: sushisalmao
  },
  {
    id: 2,
    title: 'Tempurá de Camarão',
    description:
      'Uma porção de camarões crocantes envoltos em uma massa leve de tempurá e fritos até a perfeição. Acompanha molho especial para mergulhar.',
    imgurl: tempuracamarao
  },
  {
    id: 3,
    title: 'Uramaki Filadélfia',
    description:
      'Um rolo especial com salmão, cream cheese, pepino e abacate, envolto em arroz e alga nori. Uma belíssima combinação tropical e irresistível!',
    imgurl: uramakifiladelfia
  },
  {
    id: 4,
    title: 'Sashimi Misto',
    description:
      'Fatias finas de peixe fresco, incluindo atum, salmão e peixe branco, apresentadas artisticamente. Acompanha molho de soja e wasabi.',
    imgurl: sashimimisto
  },
  {
    id: 5,
    title: 'Yakitori de Frango',
    description:
      'Os clássicos espetinhos de frango grelhados e marinados em molho teriyaki. Uma opção suculenta e saborosa para os amantes de frango.',
    imgurl: yakitorifrango
  },
  {
    id: 6,
    title: 'Miso Soup',
    description:
      'Uma tradicional sopa reconfortante de missô com tofu, algas e cebolinha. Perfeita para começar a refeição com um toque quente e nutritivo.',
    imgurl: misosoup
  }
]

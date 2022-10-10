# maite.chat

## O que precisamos?

- Um dashboard bem simples, para vendedoras e compradores
- Esse dash terá 3 pages:
  - [VENDEDORA] Criacao de produto
  - [VENDEDORA] Vendas em progresso
  - [cCOMPRADOR] Compras feitas
- Para acessar o dash, é necessário fazer login via magic link.

## Como será o fluxo?

- A pessoa acessa o site, esse acesso será sempre feito atraves da rota `/magic-link`, com os parametros:
  - `token`: O token para ser trocado pelo JWT de acesso da pessoa
  - `redirect`: A url para que a pessoa seja redirecionada depois de fazer o ligin
- Esse JWT deve ser válido apenas **durante a sessao do usuário**, e nao deve ser salvo no localStorage, deve permanecer apenas em memória.
- Caso a pessoa seja redirecionada para a área das vendedoras, deverá ser feita uma request para o back, para pegar a **LOJA** da pessoa usando o `accountId` que foi retornado na rota para trocar o `token` pelo `accessToken` (JWT).
- Caso ela nao tenha uma loja, exibir uma msg de erro e travar ali
- Caso ela tenha uma loja, econtinuar o fluxo
  - Dependendo da pag q ele foi redirecionado, deverá exibir ou o formulario pra criar um produto, ou a pag de vendas em progresso

## Fluxo de criacao de produto

- O formulário terá 3 partes:
  - A escolha do tipo (`type`) do **PRODUTO**
  - A criacao do **PRODUTO**
  - A criacao de multiplos **CONTEUDOS**
- Na escolha do tipo do produto, deverao ter alguns "cards", com uma imagem, um titulo e uma descricao, pra representar o tipo do produto
- Na criacao do **PRODUTO**, deverao existir os campos:
  - name
  - description
  - color
  - imageUrl
  - deliveryMethod
  - price
  - variations
- Na criacao dos **CONTEUDOS**, deverá existir apenas algo onde a pessoa consiga fazer upload de multiplos arquivos (imagens, videos e audios). Cada tipo de arquivo deverá ter uma "categoria" propria separada. Para essa etapa existir ou nao, depende do tipo de produto.

### Campos da escolha do tipo do produto

#### `type`

O type pode ter os valores:

| Valor               | Texto que aparece pro usuário |
| ------------------- | ----------------------------- |
| `PACK`              | 📦 Pack                       |
| `AUDIO`             | 🔊 Audio                      |
| `VIDEO`             | 🎥 Vídeo                      |
| `IMAGE`             | 📸 Foto                       |
| `CUSTOM_AUDIO`      | 🔊 Audio Customizado          |
| `CUSTOM_VIDEO`      | 🎥 Video Customizado          |
| `CUSTOM_IMAGE`      | 📸 Foto Customizada           |
| `RENT_A_GIRLFRIEND` | 💖 Web Namoro                 |
| `SEXY_VOICE_CALL`   | 🎙 Chamada de voz              |
| `SEXY_VIDEO_CALL`   | 🎥 Chamada de vídeo           |

### Campos da criacao do produto

#### `name`

Deve ter entre `1` e `100` caracteres.

#### `description`

Deve ter entre `1` e `1000` caracteres.

Tambem deve ter um aviso de que "Nao é necessario colocar a quantidade de videos, audios ou imagens, eu faco isso automaticamente por voce! 🥰" em cima do balao de texto

#### `color`

O color pode ter os valores:

| Valor     | Texto que aparece pro usuário |
| --------- | ----------------------------- |
| `#d91e18` | Vermelho                      |
| `#e67e22` | Laranja                       |
| `#f9bf3b` | Amarelo                       |
| `#2ecc71` | Verde                         |
| `#19b5fe` | Azul                          |
| `#f62496` | Rosa                          |
| `#9a12b3` | Roxo                          |
| `#96411b` | Marrom                        |
| `#aeb8b8` | Cinza                         |
| `#ffffff` | Branco                        |
| `#333333` | Preto                         |

Tambem deve existir algo para mostrar essa cor para o usuário

#### `imageUrl`

Um campo para o usuário fazer upload de uma imagem.

Segue o mesmo padrao de upload de imagens descrito no final desse arquivo.

#### `price` & `variations`

Esses 2 campos sao dependentes um do outro:

- Caso o produto tenha `variations`, ele NAO pode ter `price`
- Caso o produto NAO tenha `variations`, ele DEVE ter `price`
- O produto só pode ter variacoes caso `type` in `[CUSTOM_AUDIO, CUSTOM_VIDEO, CUSTOM_IMAGE, RENT_A_GIRLFRIEND, SEXY_VOICE_CALL, SEXY_VIDEO_CALL]`
- O usuário pode habilitar/desabilitar essas variacoes.
- Cada produto pode ter no máximo 5 variacoes
- O `price` deve ser no minimo `5`, e eve deve ser exibido em valor de reais para o usuário (Para o usuário é exibido `R$ 5,05`, para o banco é enviado um number `5.05`)
- As `variations` dependem do `type` do produto.

##### If `type` in `[CUSTOM_AUDIO, CUSTOM_VIDEO]`

```
{
	name: "30 segundos",
	description: "<Audio/Video depende do type> de 30 segundos",
	price: <a ser preenchido pelo usuário>
}
{
	name: "1 minuto",
	description: "<Audio/Video depende do type> de 1 minuto",
	price: <a ser preenchido pelo usuário>
}
{
	name: "5 minutos",
	description: "<Audio/Video depende do type> de 5 minutos",
	price: <a ser preenchido pelo usuário>
}
{
	name: "10 minutos",
	description: "<Audio/Video depende do type> de 10 minutos",
	price: <a ser preenchido pelo usuário>
}
{
	name: "+ de 10 minutos",
	description: "<Audio/Video depende do type> de + de 10 minutos",
	price: <a ser preenchido pelo usuário>
}
```

##### If `type` in `[CUSTOM_IMAGE]`

```
{
	name: <a ser preenchido pelo usuário>,
	description: <a ser preenchido pelo usuário>,
	price: <a ser preenchido pelo usuário>
}
```

##### If `type` in `[RENT_A_GIRLFRIEND]`

```
{
	name: "1 dia",
	description: <a ser preenchido pelo usuário>,
	price: <a ser preenchido pelo usuário>
}
{
	name: "1 semana",
	description: <a ser preenchido pelo usuário>,
	price: <a ser preenchido pelo usuário>
}
{
	name: "1 mes",
	description: <a ser preenchido pelo usuário>,
	price: <a ser preenchido pelo usuário>
}
```

##### If `type` in `[SEXY_VOICE_CALL, SEXY_VIDEO_CALL]`

```
{
	name: "10 minutos",
	description: "<Audio/Video depende do type> de 10 minutos",
	price: <a ser preenchido pelo usuário>
}
{
	name: "Até gozar",
	description: "Camada de <audio/video depende do type> até voce gozar",
	price: <a ser preenchido pelo usuário>
}
```

#### `deliveryMethod`

O `deliveryMethod` vai variar conforme o `type` do produto.

##### If `type` in `[PACK, AUDIO, VIDEO, IMAGE]`

| Valor                    | Texto que aparece pro usuário            |
| ------------------------ | ---------------------------------------- |
| `AUTOMATIC_OUR_PLATFORM` | 💖 Automáticamente pela nossa plataforma |

##### If `type` in `[CUSTOM_AUDIO, CUSTOM_VIDEO, CUSTOM_IMAGE]`

| Valor                 | Texto que aparece pro usuário    |
| --------------------- | -------------------------------- |
| `MANUAL_DISCORD_DM`   | 🟦 Manualmente pelo Discord      |
| `MANUAL_GOOGLE_DRIVE` | 🔰 Manualmente pelo Google Drive |

##### If `type` in `[RENT_A_GIRLFRIEND, SEXY_VOICE_CALL, SEXY_VIDEO_CALL]`

| Valor               | Texto que aparece pro usuário |
| ------------------- | ----------------------------- |
| `MANUAL_DISCORD_DM` | 🟦 Manualmente pelo Discord   |

### Campos da criacao dos conteudos

- Conteúdos só podem ser criados se `type` in `[PACK, AUDIO, VIDEO, IMAGE]`
- Caso `type = PACK`, o usuário podera fazer upload de Videos, Imagens e Audios, e DEVERÁ fazer upload de ao menos 2 midias.
- Caso `type = AUDIO`, o usuário DEVERÁ fazer upload de apenas 1 Audio
- Caso `type = VIDEO`, o usuário DEVERÁ fazer upload de apenas 1 Video
- Caso `type = IMAGE`, o usuário DEVERÁ fazer upload de apenas 1 Imagem

## Upload de imagens/videos/audios (mídias)

- Para fazer o upload de qualquer midia, é necessário primeiro ter um ID para relacionar essa imagem, ou seja, antes de fazer o Upload da imagem em si, é necessário que o **PRODUTO** tenha sido criado.
- O upload consiste em 2 etapas:
  - Primeiro é feita uma chamada para a API, onde é enviado o ID do produto. Esse chamada retornará um `url`
  - Com o `url` retornado, será feita uma request `POST`, enviando a mídia no formato multipart-form

## Vendas/Compras em progresso

- Uma listagem das vendas em progresso

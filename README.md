# Site profissional — Magno Gabriel

Landing page institucional, estática e responsiva, para Magno Gabriel Orlando da Silva — Terapeuta | Abordagem Psicanalítica.

## Visualização dentro do ChatGPT / arquivo avulso

Para visualizar **sem depender de pastas externas**, abra `visualizar-site.html` em um navegador. Esta cópia inclui imagens, estilos e scripts incorporados ao próprio HTML. Também foi entregue separadamente como `abrir-site-magno.html`. **A página publicada é `index.html`**, que continua organizada com `style.css`, `script.js` e `assets/`. Se abrir somente `index.html` no visualizador de arquivos do ChatGPT, o CSS e as imagens podem não carregar: isso não representa a aparência do site hospedado.

## Prévia local

Abra `index.html` no navegador. Os links e imagens locais funcionam sem servidor; as fontes Google são opcionais e têm fontes alternativas locais.

Para testar via servidor local, se tiver Python instalado:

```bash
cd magno-gabriel-site
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Personalização dos links (arquivo `script.js`)

Edite somente o bloco `SITE_CONFIG` no início do arquivo:

- `WHATSAPP_NUMBER`: número no padrão internacional, sem `+`, espaços ou traços.
- `WHATSAPP_MESSAGE`: mensagem que o visitante encontrará preenchida ao abrir o WhatsApp.
- `INSTAGRAM_URL`: perfil oficial (`https://www.instagram.com/magnogabriiel/`).
- `AGENDA_URL`: link oficial já configurado: `https://aionis.com.br/agendar/magno-gabriel`. Todos os botões de agendamento levam diretamente à plataforma Aionis. Se precisar substituir o link, basta editar esta constante no `script.js`; se ficar vazio, os botões usarão o WhatsApp como alternativa.

**Não existe calendário próprio**, formulários de captura ou armazenamento de dados.

## Editar textos

Os textos estão no `index.html`. O título principal aparece no elemento `<h1>`. As demais seções estão identificadas por `id` (`sobre`, `abordagem`, `atendimentos`, `contato`). O arquivo `privacidade.html` contém a página de privacidade.

## Editar fotos

As imagens estão na pasta `assets/images/`:

- `retrato-hero.webp`: fotografia de abertura;
- `retrato-sobre.webp`: fotografia em preto e branco da seção Sobre mim;
- `retrato-perfil.webp`: retrato menor no mosaico;
- `detalhe-ambiente.webp`: recorte do ambiente da fotografia enviada para uso ilustrativo;
- `compartilhamento.webp`: arte de compartilhamento.

As fotos foram fornecidas pelo responsável pelo site; nenhum rosto fictício foi apresentado como paciente ou como o próprio Magno. Para trocar uma imagem, substitua o arquivo mantendo o nome ou altere o atributo `src` no HTML. Imagens `webp` são mais leves para conexões móveis.

## Publicar no GitHub

1. Crie um repositório vazio no [GitHub](https://github.com/new), por exemplo `magno-gabriel-site`.
2. Faça upload dos **arquivos e pastas que estão dentro de `magno-gabriel-site`**, mantendo `index.html` na raiz do repositório.
3. Publique a alteração na branch `main`.
4. Confirme que arquivos como `style.css`, `script.js`, `netlify.toml`, `privacidade.html`, `assets/` estão ao lado de `index.html`.

## Publicar na Netlify

1. Entre em [app.netlify.com](https://app.netlify.com/).
2. Clique em **Add new project** / **Import an existing project**.
3. Autorize a integração com o GitHub e selecione seu repositório.
4. Escolha a branch de produção `main`.
5. Deixe **Build command vazio** e **Publish directory = `.`**.
6. Publique. O arquivo `netlify.toml` já especifica `publish = "."`.
7. Abra a URL gratuita `*.netlify.app` fornecida pela plataforma e confirme os links.

Depois de conectar o repositório, alterações enviadas à branch `main` podem disparar novas publicações automaticamente.

## SEO e compartilhamento

O site inclui `title`, `description`, informações Open Graph, cartão social e favicon MG. Quando houver um endereço público definitivo, atualize `og:image` para uma **URL HTTPS absoluta** apontando para `assets/images/compartilhamento.webp` no domínio publicado. Só crie `link rel="canonical"` depois de conhecer o endereço definitivo.

## Acessibilidade e desempenho

- HTML semântico e um único `<h1>`;
- navegação por teclado e foco destacado;
- menu móvel com `aria-expanded`, fechamento com Esc e clique fora;
- efeitos suaves com suporte a `prefers-reduced-motion`;
- botão flutuante pequeno de WhatsApp em todas as telas e durante toda a rolagem; botão compacto de agendamento após a primeira seção no celular;
- imagens locais otimizadas, lazy-loading quando adequado;
- site 100% estático: sem `npm`, compilação, banco de dados ou backend.

## Ícone flutuante de WhatsApp

O ícone enviado foi integrado ao site em `assets/icons/whatsapp-branco.png`, com fundo transparente e desenho branco. O botão verde-sálvia é pequeno e permanece visível durante toda a navegação, inclusive no celular e na página de privacidade. No celular, após o banner, surge também um botão compacto **Agendar sessão**; os dois controles não se sobrepõem.

## Arquivos

```
magno-gabriel-site/
├── index.html
├── visualizar-site.html (prévia independente)
├── privacidade.html
├── style.css
├── script.js
├── netlify.toml
├── README.md
├── .gitignore
└── assets/
    ├── images/
    └── icons/
```

## Pendências antes da divulgação

1. Conferir o link da Aionis no site publicado e confirmar se o agendamento abre corretamente.
2. Após publicar, atualizar o endereço absoluto da imagem Open Graph, se desejado.
3. Conferir se a descrição das modalidades de atendimento e o WhatsApp continuam atuais.

Não são alegados títulos acadêmicos, registros profissionais, avaliações, métricas ou resultados terapêuticos não fornecidos.
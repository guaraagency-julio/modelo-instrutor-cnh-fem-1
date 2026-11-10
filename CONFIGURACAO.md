# Configuração antes de utilizar com uma cliente real

Este é um modelo comercial fictício desenvolvido para o portfólio da Guará Agency. Não há instrutora, depoimentos, habilitações profissionais, endereço, região, valores ou pacotes comprovados associados à marca.

## 1. WhatsApp e conversão

Abra `script.js`, encontre `const WHATSAPP_NUMBER = '';` e insira o número **somente com dígitos**, incluindo DDI do Brasil (55) e DDD. Exemplo de formato: `55DDDNÚMERO` (substitua pelo número verdadeiro). Sem essa informação, o site abre um diálogo com a mensagem pronta para cópia em vez de fingir que enviou contato. O formulário não coleta nem envia dados para servidores.

## 2. Personalizar a marca

- Substitua o nome fictício da marca e o título da página pelo nome confirmado da instrutora.
- Atualize os textos da seção **Quem ensina**, adicionando o retrato verdadeiro, autorização/certificação verificáveis e história profissional.
- Fotos no código referenciam páginas de imagens gratuitas do Pexels; são ilustrativas e NÃO representam a instrutora nem alunas reais.
- Use depoimentos somente com consentimento. Atualmente não há avaliações inventadas.
- Confirme e informe cidade de atuação, modalidade de aula, veículo, câmbio, disponibilidade, preço e pagamento antes de anunciar.
- Use a identidade visual já estabelecida da cliente quando existir.

## 3. Segurança e regras

Aulas práticas e requisitos de instrutoras/veículos variam conforme modalidade, finalidade e normas atualizadas do DETRAN e demais autoridades competentes. Aulas no carro da própria aluna, primeiro processo de habilitação, atendimento com veículo adaptado, duplo comando ou domicílio só devem ser anunciados após confirmação de permissão legal e disponibilidade real.

Nunca associar falsamente a profissional ao DETRAN. Não garantir que qualquer aluna perderá o medo em prazo fixo.

## 4. Publicação

Site estático: `index.html`, `styles.css`, `script.js`, sem build e sem backend.

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente quando houver push para `main`. Na configuração do repositório, selecione **Settings > Pages > Build and deployment > Source: GitHub Actions**. A URL esperada segue `https://guaraagency-julio.github.io/NOME-DO-REPOSITORIO/`.

## 5. Testes antes da entrega

- Abrir desktop, tablet e celular (incluindo 320px de largura).
- Conferir que imagens, fontes e seções carregam.
- Usar navegação por teclado, menu mobile, acordeão FAQ e botões de contato.
- Validar o número real de WhatsApp e a mensagem dinâmica do formulário.
- Revisar todos os claims e o conteúdo jurídico/comercial com a profissional.

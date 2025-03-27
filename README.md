# Organizador de Arquivos

Este projeto é um script em **Node.js** que organiza arquivos em um diretório selecionado, separando-os em categorias predefinidas (como **Imagens**, **Vídeos**, **Documentos**, **Áudio** e **Outros**). O script cria uma pasta chamada **Organizados** e dentro dela, subpastas para cada categoria, movendo os arquivos para suas respectivas pastas.

## Funcionalidades

- Organiza arquivos automaticamente, movendo-os para as subpastas baseadas em suas extensões.
- Suporta as categorias:
  - **Imagens**: `.png`, `.jpg`, `.jpeg`, `.gif`, `.bmp`
  - **Vídeos**: `.mp4`, `.mkv`, `.avi`, `.mov`
  - **Documentos**: `.pdf`, `.docx`, `.txt`, `.xlsx`, `.pptx`
  - **Áudio**: `.mp3`, `.wav`, `.ogg`
  - **Outros**: Qualquer arquivo que não se encaixe nas categorias anteriores.

## Pré-requisitos

Antes de começar, você precisa ter o **Node.js** instalado em seu computador. Você pode baixar e instalar o Node.js em [https://nodejs.org](https://nodejs.org).

Além disso, você precisará instalar os seguintes pacotes de Node.js:

- `chalk` - para colorir a saída no terminal.
- `figlet` - para criar texto estilizado no terminal.
- `readline` - para interação com o usuário.
- `fs` - Para manipular arquivos e diretórios
- `path` - Para lidar com caminhos de arquivos
#### Instale as dependências usando o comando:

```
npm install chalk figlet readline fs path
```
---
# Como usar
## Passo 1: Clonar o repositório
```
git clone https://github.com/mthnicolai/Categorizer/
```
## Passo 2: Rodar o script
```
node app.js
```
## Passo 3: Interação no terminal

- O script irá exibir um menu no terminal com o nome do programa e uma explicação sobre como funciona.
- Você pode optar por ver como o programa funciona ou seguir diretamente para organizar os arquivos de uma pasta.
- Após selecionar a pasta, o programa criará uma pasta chamada "Categorizer" e moverá os arquivos para as subpastas apropriadas, conforme suas categorias.
- Se você optar por executar o script, ele irá pedir qual a pasta/local que deseja organizar, após isso é só informar o local em **endereço como texto**
---
## Contribuições
Sinta-se à vontade para abrir um issue ou fazer um pull request para melhorias ou correções.

## Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.



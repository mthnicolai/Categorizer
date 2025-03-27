import fs from 'fs';
import path from 'path';
import readline from 'readline';
import chalk from 'chalk';
import figlet from 'figlet';

const categorias = {
  Imagens: [".png", ".jpg", ".jpeg", ".gif", ".bmp"],
  Vídeos: [".mp4", ".mkv", ".avi", ".mov"],
  Documentos: [".pdf", ".docx", ".txt", ".xlsx", ".pptx"],
  Áudio: [".mp3", ".wav", ".ogg"],
  Outros: []
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const funcionamento = chalk.bold.yellow("💡 Este script serve para organizar arquivos em uma pasta que será criada automaticamente, separando-os por categorias, tais são:\n -> Imagens\n -> Vídeos\n -> Documentos\n Entre outros...");

// Função para criar a nova pasta e suas subpastas
function criarPastasOrganizadas(diretorio) {
  const novaPasta = path.join(diretorio, "Categorizer");

  // Se a pasta 'Organizados' não existir, criamos ela
  if (!fs.existsSync(novaPasta)) {
    fs.mkdirSync(novaPasta);
    console.log(chalk.blue(`Pasta "Organizados" criada em: ${novaPasta}`));
  }

  // Criamos as subpastas para cada categoria
  for (const categoria in categorias) {
    const pastaCategoria = path.join(novaPasta, categoria);

    if (!fs.existsSync(pastaCategoria)) {
      fs.mkdirSync(pastaCategoria);
      console.log(chalk.blue(`Subpasta "${categoria}" criada em: ${pastaCategoria}`));
    }
  }
}

// Função para organizar os arquivos
function organizarArquivos(diretorio) {
  if (!fs.existsSync(diretorio)) {
    console.log(chalk.red("A pasta selecionada não existe!"));
    return;
  }

  const arquivos = fs.readdirSync(diretorio);

  // Criamos a pasta de organização e as subpastas
  criarPastasOrganizadas(diretorio);

  // Movendo os arquivos para suas respectivas subpastas
  arquivos.forEach(arquivo => {
    const ext = path.extname(arquivo);
    let categoriaEncontrada = "Outros";

    // Verificar qual categoria o arquivo pertence
    for (const categoria in categorias) {
      if (categorias[categoria].includes(ext)) {
        categoriaEncontrada = categoria;
        break;
      }
    }

    const pastaDestino = path.join(diretorio, "Organizados", categoriaEncontrada);

    // Mover o arquivo para a subpasta correspondente
    fs.renameSync(
      path.join(diretorio, arquivo),
      path.join(pastaDestino, arquivo)
    );

    console.log(chalk.green(`Movido: ${arquivo} → ${categoriaEncontrada}`));
  });

  console.log(chalk.blue("📂 Organização concluída!"));
}

// Função para exibir o menu
function menu() {
  console.clear();
  console.log(chalk.bold(figlet.textSync("Categorizer", { font: "colossal" })));
  console.log(chalk.blue.bold("Bem-vindo ao script de organização de arquivos!\n"));

  rl.question("Deseja ver como o programa funciona? (s/n): ", (resposta) => {
    if (resposta.toLowerCase() === "s") {
      console.log(funcionamento);
      perguntarCaminho();
    } else if (resposta.toLowerCase() === "n") {
      perguntarCaminho();
    } else {
        menu()
    }
  });
}

// Função para perguntar o caminho da pasta a ser organizada
function perguntarCaminho() {
  rl.question("Ok, agora digite o caminho da pasta que deseja organizar: ", (resposta) => {
    const caminhoPasta = resposta.trim() || './'; // Usa o diretório atual por padrão
    organizarArquivos(caminhoPasta);
    rl.close();
  });
}

// Iniciar o menu
menu();

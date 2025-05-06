# 🎮 Jogo da Velha

Um jogo da velha moderno desenvolvido com React, TypeScript e Tailwind CSS, com suporte para jogar contra a IA.

## ✨ Funcionalidades

- 🎯 Interface moderna e responsiva
- 🤖 Modo de jogo contra IA
- 📊 Histórico de partidas
- 💫 Animações e efeitos visuais
- 🎨 Design limpo e intuitivo

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- Radix UI (para modais)

## 🚀 Como Executar

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/jogo-da-velha.git
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto
```bash
npm run dev
```

## 🎮 Como Jogar

1. O jogo começa com o jogador X
2. Clique em qualquer quadrado vazio para fazer sua jogada
3. Use o botão "Jogar contra IA" para alternar entre modo multiplayer e modo IA
4. O botão "Novo Jogo" reinicia a partida atual
5. Acesse o histórico de partidas através do botão "Histórico"

## 🎯 Regras

- O primeiro jogador a alinhar 3 símbolos (horizontal, vertical ou diagonal) vence
- Em caso de empate, nenhum jogador vence
- O histórico de partidas é salvo localmente no navegador

## 🎨 Componentes Principais

- `Board`: Tabuleiro do jogo com as casas clicáveis
- `Square`: Casa individual do tabuleiro
- `ToolButtons`: Barra de ferramentas com botões de ação
- `GameHistory`: Modal com histórico de partidas
- `AIThinking`: Indicador visual quando a IA está "pensando"

## 📝 Estrutura do Projeto

```
src/
  ├── components/     # Componentes React
  ├── contexts/       # Contextos (GameContext)
  ├── helpers/        # Funções auxiliares
  ├── @types/         # Definições de tipos TypeScript
  └── App.tsx         # Componente raiz
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

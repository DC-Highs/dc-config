# 🐉 O Guia Supremo: GameConfigDto do Dragon City

O arquivo `game-config.ts` (através da interface `GameDataConfig`) é o "cérebro" do Dragon City. Ele opera no modelo **Game as a Service (GaaS)**, onde o servidor envia toda a configuração do estado atual do jogo para o seu dispositivo. Desta forma, a produtora (SocialPoint) consegue alterar atributos de dragões, balancear o ouro e iniciar eventos sem precisar que você baixe atualizações nas lojas de aplicativos.

O DTO é dividido em grandes categorias que controlam diferentes facetas do jogo. Abaixo, detalhamos o propósito de cada seção e **como os dados conversam entre si**.

---

## 1. Dragões, Níveis e Atributos 🧬

O núcleo do jogo. Estas chaves controlam as estatísticas, evolução e o visual das criaturas.

*   `deity_world_dragons`: O compêndio primário com o catálogo (Status) de **todos os dragões**. Cada dragão (Interface `Dragon`) possui:
    *   `id`: Identificador único (crucial para o relacionamento com outros sistemas).
    *   `attributes`: Array com os elementos do dragão (Fogo, Terra, Lenda, etc.).
    *   `production_per_hour`: Rentabilidade de ouro base.
    *   Regras para Árvore da Vida: `summon_min_level`, `summon_crystal_cost`, `summon_period` (quantas órbitas / tempo p/ invocar).
*   `max_dragon_levels`: Balanço e métricas para qual é o nível máximo que um dragão pode atingir, baseado no seu grau de empoderamento (estrelas) e no nível do Altar do jogador.
*   `levels`: Trilha do Nível do Jogador. Define o XP necessário para subir de nível da conta e os prêmios dados.
*   `skills`: Lista dos ataques treináveis no Centro de Treinamento. Rege o dano base das magias em combate e efeitos.
*   `dragon_skins`: Roupas/Skins que podem alterar atributos livremente (modificadores multiplicadores de Vida/Dano). As skins referenciam o `dragon_id` para se vincular à espécie nativa.
*   `perks`: Vantagens individuais (Vida, Dano, Procriação) que são injetadas diretamente em um dragão específico.
*   `dragon_mastery`: Sistema de Maestria. São metas (`goals`) vinculadas a ações do jogador (`breed`, `feed`, `hatch`) que aumentam multiplicadores globais da conta.

### 🔗 Como os Dados se Relacionam:
O `id` do dragão em `deity_world_dragons` é a "Primary Key". Se você equipa uma skin, o sistema vai na lista `dragon_skins`, busca o `dragon_id` atrelado e aplica os bônus aos `attributes` base do dragão. O `max_dragon_levels` ditará até onde ele pode ser alimentado, o que, por sua vez, vai escalar o `production_per_hour` e o dano das `skills` equipadas.

---

## 2. Procriação e Instalações (Breeding & Hatching) ❤️

É aqui que a mágica da criação acontece, mesclando IDs para gerar novos Ovos.

*   `breeding`: Regras originais da Árvore e Montanha de Procriação.
    *   Contém os pares de `Incompatibility` (elementos que não podem cruzar diretamente).
    *   Lista os pares `soulmates` (Almas Gêmeas): Cruzamentos entre IDs de dragão específicos (`parent_1_id` e `parent_2_id`) que dão alta chance para ganhar prêmios raros.
*   `sanctuary_breeding`: Combinações exclusivas que o algoritmo usa quando a procriação acontece no "Santuário de Procriação".
*   `special_breeding`: Eventos de cruza (finais de semana) onde o sistema liga chaves apontando que a junção de `Dragon_A` + `Dragon_B` tem chance de dropar um Dragão Heroico novo durante aquele evento.
*   `tree_of_life` / `tree_of_life_recall` / `tree_of_life_powerup`: As funções da Árvore da Vida.
    *   *Summon*: Regras ativando/desativando se o `dragon_id` pode ser invocado e quantas joias/orbes custam (Lendários gastam mais que Raros).
    *   *Recall*: Regras de triturar dragões repetidos devolvendo Orbes na mesma raridade do respectivo `id`.
    *   *Empower*: Exigências logísticas para adicionar Estrelas Douradas usando os Orbes retornados.

### 🔗 Como os Dados se Relacionam:
O ato base (Breeding) avalia a compatibilidade de dois `dragons_ids` passados pelo cliente. O servidor confere se eles caem em `soulmates` ou `special_breeding` (têm buff ativo?), aplica o `Boost` da ilha ou das `perks` de cruza que eles carregam, e devolve o ID do Ovo e o tempo em segundos que levará (dado também da root `deity_world_dragons`).

---

## 3. Economia de Recursos (Gold, Food, IAP & Chests) 💰

O sistema sanguíneo do jogo, controlando gastos, baús e monetização pesada.

*   `farm_crops`: Regula a Fazenda. Lista as comidas disponíveis, tempo até ficar pronto (`seconds`), ouro necessário e XP do jogador ao colher.
*   `chests` (Baús): O motor de *Gacha/Lootboxes* do Dragon City.
    *   Cada baú (`id`) possui matrizes de recompensas (`rewards`).
    *   Usa o sistema de Peso (`weight`), definindo que 10 Comidas tem peso 85% e 1 Dragão Heroico tem peso 1%, por exemplo.
*   `habitat_tokens`: Requerimentos diários/totais de pedras elementares precisos para fazer o upgrade dos habitats elementares via oficina/ofício.
*   `battle_pass` (Passe de Batalha): A robusta estrutura de Passes Free/Premium/Elite.
    *   Traz as Uids das lojas iOS/Google Play (`iap_uid`, `iap_elite_discount_uid`) para compras com grana real.
    *   Vincula nós (Goals) às ações do jogador, exigindo o `action_id` (exemplo: Alimentar 10 x).
*   `items` / `collectibles`: Tudo que você guarda que entra na interface do inventário passivo (moedas de evento, tickets de troca).

### 🔗 Como os Dados se Relacionam:
Quando um jogador clica em processar uma compra real, o App chama o ID do `battle_pass`, verifica os `purchase_popup` aplicáveis e envia a String Uid nativa à Google/Apple Stores. Quando um Baú é aberto, a roleta consulta a base de dados `chests`, joga um número aleatório atrelado aos `weights` dos `rewards`, e insere no perfil da conta (food, gold, tokens ou tickets atrelando ao `id` da loja final). E tudo pode ser exigido e atrelado como meta diária no decorrer das `liveops_challenges`.

---

## 4. Batalhas, Ligas e Arenas (PvP & PvE) ⚔️

Este aglomerado rege o simulador matemático de combate com inimigos engessados ou ranqueados.

*   `dragon_tournaments` (Missões e Torneios Fixos/Temporários):
    *   Lista as batalhas (`Matches`), onde cada batalha define uma série impiedosa de 3 Inimigos da IA (Enemy1, Enemy2, Enemy3) por `dragon_id` e Nível engessado.
    *   Possui *Requisitos*: o código obriga o App do usuário a limitar a lista de escolha a dragões que cumpram exigências (`Rarity`, ou possuir o `ElementType` Fogo e Água).
*   `dragon_wars`: Herança do sistema de Guerra de Alianças. Usado frequentemente como métrica interna / buffs que reescrevem o HP e Dano passivo que ditam a balança vital na "Master Arena" da temporada, e de ligas diárias.

### 🔗 Como os Dados se Relacionam:
Antes da fase de combates se iniciar, o motor checa os `requirements` dos `dragon_tournaments`. Se exige um dragão Terra, o jogo filtra sua base que cruza com `deity_world_dragons` `attributes` para achar terra. Em combate, avalia o dano das `skills`, soma multiplicadores de nível oriundos do buff de contas com alta maestria (`dragon_mastery`), subtrai HP das armaduras via `dragon_skins`, validando tudo isso no balanceamento do PvP atual (`dragon_wars`).

---

## 5. Operações Ao Vivo (Os Mega Eventos / LiveOps) 🎡

A estratégia da SocialPoint de injetar conteúdo fresco de semana em semana sem parar o jogo inteiro:

*   `event_island`: A tabela pai das ilhas do fundo (`min_level`, timestamps de aparição `availability` do evento global no seu mundo de jogo, coordenas 2D e scale de onde a renderização do evento vai "sentar"). Cada evento tem o seu mini-game isolado:
    *   `fog_island` (Névoa): Movimentos célula a célula pagando moedas, descobrindo o escuro por meio da rede.
    *   `maze_island` (Labirinto): Um "mapa da mina" com caminhos predeterminados. Cada dragão da ilha tem um custo de jornada com caminhos e prêmios que esparramam do grid da ilha aos poucos.
    *   `grid_island` (Grade): Sistema de expansão em xadrez pelo mapa, lutando contra encontros (`encounters`) e abrindo decorações/peças gastando Criptas dagrade.
    *   `tower_island`: Uma roleta Gacha (fiação e spinner); ditando seus lances nas posições `Y` rumo ao telhado, lidando com emboscadas.
    *   `puzzle_island` (Candy Crush): Tabela `candyX/candyY`. Matriz combinatória Match-3 em cascata ligada com cor de doces explodíveis baseados em missões lineares para ganhar recompensas aos flancos.
    *   `runner_island` (Corrida): O Arcade Infinito, pulando vias para fugir de cristais, capturando as engrenagens ao voar. Configura a gravidade, speed global, e prêmios.
    *   `heroic_races`: O coliseu! Estruturas definindo as tasks, *pool time* e *nodes* da Lap (Volta 1, Volta 2...), atrelado a moedas, *wait time* e a recompensa monumental (O lendário/heroico final).
*   `Currencies` e `Actions`: Dentro dessas ilhas, as moedas são geradas via "Actions". Existe uma "Ação de chocar ovo" (`HATCH_EGG`). Toda vez que você choca, tem uma %, controlada pelo `pool_time` de dar a nova Moeda Evento.

### 🔗 Como os Dados se Relacionam:
Quando o evento se acende, a `event_island` baixa as texturas (`asset_versioning`) pro dispositivo e ergue o evento visualmente. Se é o labirinto (`maze_island`), ele conecta as "Ações" de jogo normais do jogador (`farm_crops`, `breeding`) permitindo a emissão de `Currencies` do Labirinto caso ele gere as ações e a piscina (`pool_points`) não esteja em resfriamento temporal (Cooldown Time). O jogador gasta essas moedas no mini-game que distribui os `chests` e `deity_world_dragons` que caem no "banco" de recompensas instantâneas (Items). Tudo se conecta maravilhosamente pela Web, gerando loops viciantes e controláveis a qualquer momento pelo backend do Dragon City!

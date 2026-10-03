/*
  CONTEÚDO DO PORTFÓLIO
  Tudo que aparece no site sai deste arquivo. O layout fica em index.html, style.css e app.js.

  Para adicionar um cliente:
    1. Coloque os prints em assets/cases/<id-do-cliente>/
    2. Copie um bloco de cliente abaixo e ajuste os campos
    3. Em "nicho", use um dos ids da lista "nichos"

  Nicho sem cliente não aparece no site.
*/
window.PORTFOLIO = {
  capa: {
    kpis: [
      { valor: "R$1MM+", rotulo: "Faturamento gerado" },
      { valor: "5.182%", rotulo: "ROAS máximo alcançado" },
      { valor: "50+", rotulo: "Clientes atendidos" }
    ]
  },

  nichos: [
    { id: "eventos", nome: "Eventos" },
    { id: "e-commerce", nome: "E-commerce" },
    { id: "negocio-local", nome: "Negócio Local" },
    { id: "clinica", nome: "Clínica de Estética / Médica" },
    { id: "marketing-politico", nome: "Marketing Político" }
  ],

  clientes: [
    {
      id: "show-ana-castela",
      nicho: "eventos",
      nome: "Show Ana Castela",
      descricao: "Venda de ingressos · Belém",
      local: "Brasil",
      destaques: [
        {
          valor: "5.182%",
          rotulo: "ROAS alcançado"
        },
        {
          valor: "R$55.746",
          rotulo: "Em ingressos vendidos"
        }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Vendas no site"
          ],
          estrategia: "Campanha de vendas de ingressos no site, com conjuntos de anúncios no Facebook e Instagram segmentados por raio a partir de Belém (10 km), público 30+ e segmentação Advantage+. Verba distribuída entre os conjuntos conforme o retorno de cada um.",
          metricas: [
            {
              valor: "5.182%",
              rotulo: "ROAS alcançado"
            },
            {
              valor: "R$55.746",
              rotulo: "Em ingressos vendidos"
            },
            {
              valor: "128",
              rotulo: "Compras no site"
            },
            {
              valor: "R$8,40",
              rotulo: "Custo por compra"
            },
            {
              valor: "R$1.076",
              rotulo: "Investimento total"
            }
          ],
          resumo: {
            valor: "5.182%",
            texto: "de ROAS — R$55.746 em ingressos vendidos com R$1.076 investidos em setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/show-ana-castela/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · setembro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "show-zeze-di-camargo",
      nicho: "eventos",
      nome: "Show Zezé Di Camargo",
      descricao: "Venda de ingressos · Belém",
      local: "Brasil",
      destaques: [
        {
          valor: "1.144%",
          rotulo: "ROAS alcançado"
        },
        {
          valor: "R$109.349",
          rotulo: "Em ingressos vendidos"
        }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Vendas no site"
          ],
          estrategia: "Campanha de vendas de ingressos no site, com conjuntos de anúncios no Facebook e Instagram segmentados por raio a partir de Belém (10 a 80 km) e por cidades da região, público 35+ e segmentação Advantage+. Verba distribuída entre os conjuntos conforme o retorno de cada um.",
          metricas: [
            {
              valor: "1.144%",
              rotulo: "ROAS alcançado"
            },
            {
              valor: "R$109.349",
              rotulo: "Em ingressos vendidos"
            },
            {
              valor: "184",
              rotulo: "Compras no site"
            },
            {
              valor: "R$51,93",
              rotulo: "Custo por compra"
            },
            {
              valor: "R$9.555",
              rotulo: "Investimento total"
            }
          ],
          resumo: {
            valor: "1.144%",
            texto: "de ROAS — R$109.349 em ingressos vendidos com R$9.555 investidos entre junho e setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/show-zeze-di-camargo/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · junho a setembro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "show-alexandre-pires",
      nicho: "eventos",
      nome: "Show Alexandre Pires",
      descricao: "Venda de ingressos · Belém",
      local: "Brasil",
      destaques: [
        {
          valor: "629%",
          rotulo: "ROAS alcançado"
        },
        {
          valor: "R$105.717",
          rotulo: "Em ingressos vendidos"
        }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Vendas no site"
          ],
          estrategia: "Campanha de vendas de ingressos no site, com conjuntos de anúncios no Facebook e Instagram segmentados por raio a partir de Belém (15 a 80 km) e por cidades da região, público 18+ e segmentação Advantage+. Verba distribuída entre os conjuntos conforme o retorno de cada um.",
          metricas: [
            {
              valor: "629%",
              rotulo: "ROAS alcançado"
            },
            {
              valor: "R$105.717",
              rotulo: "Em ingressos vendidos"
            },
            {
              valor: "361",
              rotulo: "Compras no site"
            },
            {
              valor: "R$16.802",
              rotulo: "Investimento total"
            }
          ],
          resumo: {
            valor: "629%",
            texto: "de ROAS — R$105.717 em ingressos vendidos com R$16.802 investidos. Só em setembro de 2026, ROAS de 710% e 130 compras."
          },
          prints: [
            {
              src: "assets/cases/show-alexandre-pires/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · período completo da campanha"
            },
            {
              src: "assets/cases/show-alexandre-pires/meta-02.png",
              legenda: "Gerenciador de Anúncios Meta · setembro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "show-geraldo-azevedo",
      nicho: "eventos",
      nome: "Show Geraldo Azevedo",
      descricao: "Venda de ingressos · Belém",
      local: "Brasil",
      destaques: [
        {
          valor: "1.867%",
          rotulo: "ROAS alcançado"
        },
        {
          valor: "R$14.071",
          rotulo: "Em ingressos vendidos"
        }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Vendas no site"
          ],
          estrategia: "Campanha de vendas de ingressos no site, com conjuntos de anúncios no Facebook e Instagram segmentados por raio a partir de Belém (10 km), público 30+ e segmentação Advantage+. Verba distribuída entre os conjuntos conforme o retorno de cada um.",
          metricas: [
            {
              valor: "1.867%",
              rotulo: "ROAS alcançado"
            },
            {
              valor: "R$14.071",
              rotulo: "Em ingressos vendidos"
            },
            {
              valor: "32",
              rotulo: "Compras no site"
            },
            {
              valor: "R$23,55",
              rotulo: "Custo por compra"
            },
            {
              valor: "R$754",
              rotulo: "Investimento total"
            }
          ],
          resumo: {
            valor: "1.867%",
            texto: "de ROAS — R$14.071 em ingressos vendidos com R$754 investidos em setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/show-geraldo-azevedo/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · setembro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "show-jon-secada",
      nicho: "eventos",
      nome: "Show Jon Secada",
      descricao: "Venda de ingressos · Belém",
      local: "Brasil",
      destaques: [
        {
          valor: "509%",
          rotulo: "ROAS alcançado"
        },
        {
          valor: "R$26.684",
          rotulo: "Em ingressos vendidos"
        }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Vendas no site"
          ],
          estrategia: "Campanha de vendas de ingressos no site, com conjuntos de anúncios no Facebook e Instagram segmentados por raio a partir de Belém (20 km) e por cidades da região, público 35+ e segmentação Advantage+. Verba distribuída entre os conjuntos conforme o retorno de cada um.",
          metricas: [
            {
              valor: "509%",
              rotulo: "ROAS alcançado"
            },
            {
              valor: "R$26.684",
              rotulo: "Em ingressos vendidos"
            },
            {
              valor: "62",
              rotulo: "Compras no site"
            },
            {
              valor: "R$84,48",
              rotulo: "Custo por compra"
            },
            {
              valor: "R$5.238",
              rotulo: "Investimento total"
            }
          ],
          resumo: {
            valor: "509%",
            texto: "de ROAS — R$26.684 em ingressos vendidos com R$5.238 investidos entre julho e setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/show-jon-secada/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · julho a setembro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "apso",
      nicho: "eventos",
      nome: "APSO",
      descricao: "Associação Paulista Sudoeste · Igreja Adventista",
      local: "Brasil",
      destaques: [
        { valor: "1.231", rotulo: "Leads gerados" },
        { valor: "R$1,84", rotulo: "Custo por lead" }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: ["Facebook", "Leads", "Evento"],
          contexto: "Associação religiosa com necessidade de divulgar eventos de Semana de Oração em múltiplas cidades — Tatuí, Hortolândia, Itapetininga e região. Alta capilaridade geográfica com orçamento controlado.",
          desafio: "Alcançar membros e interessados em diferentes cidades simultaneamente, gerando inscrições e lembretes de evento com custo por resultado extremamente baixo.",
          estrategia: "Campanhas de geração de leads por cidade com criativos segmentados por localização e tipo de evento. Campanhas de lembrete com objetivo de engajamento para manter o público aquecido até a data do evento.",
          metricas: [
            { valor: "1.231", rotulo: "Leads gerados" },
            { valor: "R$1,84", rotulo: "Custo por lead" },
            { valor: "148", rotulo: "Lembretes do evento" },
            { valor: "R$2.274", rotulo: "Investimento total" }
          ],
          resumo: {
            valor: "R$1,84",
            texto: "custo por lead — 1.231 inscrições geradas em múltiplas cidades com R$2.274 de investimento total."
          },
          prints: [
            { src: "assets/cases/apso/meta-01.jpg", legenda: "Gerenciador de Anúncios Meta · campanhas por cidade" }
          ]
        }
      ]
    },

    {
      id: "triton-eyewear",
      nicho: "e-commerce",
      nome: "Triton EyeWear",
      descricao: "Loja virtual de óculos",
      local: "Brasil",
      destaques: [
        {
          valor: "639%",
          rotulo: "ROAS no Google Ads"
        },
        {
          valor: "R$44.853",
          rotulo: "Em vendas no Meta Ads"
        }
      ],
      plataformas: [
        {
          tipo: "google",
          tags: [
            "Vendas"
          ],
          estrategia: "Campanhas de vendas no Google Ads acompanhadas pelo ROAS real e pelo custo por compra, medidos direto na conta.",
          metricas: [
            {
              valor: "639,43%",
              rotulo: "ROAS real"
            },
            {
              valor: "292",
              rotulo: "Compras"
            },
            {
              valor: "R$28,34",
              rotulo: "Custo por compra"
            },
            {
              valor: "R$8,29 mil",
              rotulo: "Investimento"
            }
          ],
          resumo: {
            valor: "639%",
            texto: "de ROAS real — 292 compras a R$28,34 cada, com R$8,29 mil investidos entre 1 e 25 de setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/triton-eyewear/google-01.png",
              legenda: "Google Ads · 1 a 25 de setembro de 2026"
            }
          ]
        },
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Vendas no site"
          ],
          estrategia: "Três campanhas de vendas no site rodando em paralelo, cada uma acompanhada pelo próprio ROAS e custo por compra.",
          metricas: [
            {
              valor: "R$44.853",
              rotulo: "Em vendas no site"
            },
            {
              valor: "263",
              rotulo: "Compras no site"
            },
            {
              valor: "578% a 770%",
              rotulo: "ROAS por campanha"
            },
            {
              valor: "R$24,97",
              rotulo: "Menor custo por compra"
            }
          ],
          resumo: {
            valor: "R$44.853",
            texto: "em vendas no site somando as três campanhas — 263 compras, com ROAS entre 578% e 770%, de 1 a 25 de setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/triton-eyewear/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · 1 a 25 de setembro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "emporio-da-garrafa",
      nicho: "e-commerce",
      nome: "Empório da Garrafa",
      descricao: "Loja de Garrafas & Acessórios",
      local: "Brasil",
      destaques: [
        { valor: "734%", rotulo: "ROAS alcançado" },
        { valor: "R$21.190", rotulo: "Faturamento gerado" }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: ["Facebook", "Instagram", "E-commerce"],
          contexto: "E-commerce brasileiro de garrafas e acessórios sem histórico em Meta Ads. Todo o faturamento dependia de canais orgânicos e indicações diretas.",
          desafio: "Criar do zero uma estrutura de campanhas de tráfego pago capaz de gerar compras recorrentes com custo por aquisição controlado, em um nicho de produto de compra por impulso.",
          estrategia: "Estrutura em funil completo: campanha de tráfego para aquecer audiência, campanhas de conversão com públicos de interesse + lookalike, e remarketing para visitantes que não compraram. Testes A/B entre criativos de vídeo e estáticos.",
          metricas: [
            { valor: "734%", rotulo: "ROAS alcançado" },
            { valor: "R$21.190", rotulo: "Faturamento gerado" },
            { valor: "125", rotulo: "Compras realizadas" },
            { valor: "R$2.906", rotulo: "Investimento total" }
          ],
          resumo: {
            valor: "734%",
            texto: "de ROAS — R$21.190 faturados com R$2.906 investidos. 125 compras geradas em conta criada do zero no Meta Ads."
          },
          prints: [
            { src: "assets/cases/emporio-da-garrafa/meta-01.jpg", legenda: "Dashboard Meta Ads · agosto de 2025" }
          ]
        }
      ]
    },

    {
      id: "primavera-sem-fim",
      nicho: "e-commerce",
      nome: "Primavera Sem Fim",
      descricao: "E-commerce de moda",
      local: "Brasil",
      destaques: [
        {
          valor: "889%",
          rotulo: "ROAS na campanha de catálogo"
        },
        {
          valor: "R$10.278",
          rotulo: "Em vendas no site"
        }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Vendas no site",
            "Catálogo"
          ],
          estrategia: "Duas campanhas de vendas no site — uma com criativos e vídeos, outra de catálogo — apoiadas por uma campanha de atendimento no WhatsApp e outra para atrair seguidores qualificados.",
          metricas: [
            {
              valor: "R$10.278",
              rotulo: "Em vendas no site"
            },
            {
              valor: "28",
              rotulo: "Compras no site"
            },
            {
              valor: "889%",
              rotulo: "ROAS · catálogo"
            },
            {
              valor: "486%",
              rotulo: "ROAS · criativos e vídeos"
            },
            {
              valor: "36",
              rotulo: "Conversas no WhatsApp"
            }
          ],
          resumo: {
            valor: "889%",
            texto: "de ROAS na campanha de catálogo e 486% na de criativos — R$10.278 em vendas no site em setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/primavera-sem-fim/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · 1 de setembro a 1 de outubro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "label-dealer",
      nicho: "e-commerce",
      nome: "Label Dealer",
      descricao: "E-commerce de móveis",
      local: "Brasil",
      destaques: [
        {
          valor: "361",
          rotulo: "Contatos gerados"
        },
        {
          valor: "R$1,60",
          rotulo: "Custo por contato"
        }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Leads",
            "WhatsApp"
          ],
          estrategia: "Campanhas de leads para público frio em São Paulo, com vídeo narrado levando para uma landing page B2B e clique para o WhatsApp. Duas versões da página rodando em paralelo para comparar o custo por contato.",
          metricas: [
            {
              valor: "361",
              rotulo: "Contatos no site"
            },
            {
              valor: "R$1,60",
              rotulo: "Custo por contato · melhor campanha"
            },
            {
              valor: "R$2,59",
              rotulo: "Custo por contato · segunda campanha"
            },
            {
              valor: "23,33%",
              rotulo: "CTR de saída · melhor campanha"
            }
          ],
          resumo: {
            valor: "R$1,60",
            texto: "por contato na melhor campanha — 361 contatos gerados nas duas campanhas ativas entre 1 e 25 de setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/label-dealer/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · 1 a 25 de setembro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "anjo-camisas",
      nicho: "negocio-local",
      nome: "Anjo Camisas",
      descricao: "Loja de Itens Esportivos",
      local: "Brasil",
      destaques: [
        { valor: "667%", rotulo: "ROAS alcançado" },
        { valor: "326", rotulo: "Conversas iniciadas" }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: ["Facebook", "Instagram", "Vendas"],
          contexto: "Loja de itens esportivos sem presença em Meta Ads, dependente de vendas presenciais e orgânico. Conta criada do zero com orçamento enxuto de R$400.",
          desafio: "Gerar faturamento real com investimento mínimo, provando o canal antes de escalar. O cliente precisava ver retorno concreto no primeiro mês para confiar na estratégia.",
          estrategia: "Campanhas de conversão com segmentação por interesse esportivo + geolocalização, combinadas com campanha de tráfego para perfil do Instagram gerando visitas qualificadas. Criativos diretos com foco no produto e preço.",
          metricas: [
            { valor: "667%", rotulo: "ROAS alcançado" },
            { valor: "R$2.668", rotulo: "Faturamento gerado" },
            { valor: "326", rotulo: "Conversas iniciadas" },
            { valor: "R$400", rotulo: "Investimento total" }
          ],
          resumo: {
            valor: "R$400",
            texto: "investidos geraram R$2.668 em faturamento — ROAS de 667% no primeiro mês, com conta criada do zero."
          },
          prints: [
            { src: "assets/cases/anjo-camisas/meta-01.jpg", legenda: "Gerenciador de Anúncios Meta · campanhas" },
            { src: "assets/cases/anjo-camisas/meta-02.jpg", legenda: "Faturamento do mês informado pelo cliente" }
          ]
        }
      ]
    },

    {
      id: "agaxtur",
      nicho: "negocio-local",
      nome: "Agaxtur",
      descricao: "Agência de viagens",
      local: "Brasil",
      destaques: [
        { valor: "228", rotulo: "Conversas no WhatsApp" },
        { valor: "R$5,39", rotulo: "Custo por conversa" }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "WhatsApp"
          ],
          estrategia: "Uma campanha de conversas no WhatsApp para cada produto — cruzeiros, roteiro pelo Japão, Rota das Emoções, mercados de Natal na Europa, Alasca, golfe — segmentada por região (São Paulo, Sul e Sudeste, bairros de alto padrão) e por faixa etária (35+ e 40+).",
          metricas: [
            { valor: "228", rotulo: "Conversas no WhatsApp · soma de 6 campanhas" },
            { valor: "R$5,39", rotulo: "Custo médio por conversa" },
            { valor: "R$3,15", rotulo: "Custo por conversa · melhor campanha" },
            { valor: "R$1.228", rotulo: "Investimento · soma de 6 campanhas" },
            { valor: "96", rotulo: "Campanhas entre julho e setembro" }
          ],
          resumo: {
            valor: "R$5,39",
            texto: "por conversa iniciada — 228 conversas no WhatsApp com R$1.228 investidos em seis campanhas, entre 2 de setembro e 1 de outubro de 2026."
          },
          prints: [
            { src: "assets/cases/agaxtur/meta-02.png", legenda: "Gerenciador de Anúncios Meta · 2 de setembro a 1 de outubro de 2026" },
            { src: "assets/cases/agaxtur/meta-01.png", legenda: "Gerenciador de Anúncios Meta · julho a setembro de 2026" }
          ]
        }
      ]
    },

    {
      id: "3675burguer",
      nicho: "negocio-local",
      nome: "3675Burguer",
      descricao: "Hamburgueria",
      local: "Brasil",
      destaques: [
        {
          valor: "1.874",
          rotulo: "Visitas à página do iFood"
        },
        {
          valor: "R$0,59",
          rotulo: "Custo por visita"
        }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Tráfego",
            "iFood"
          ],
          estrategia: "Campanha de tráfego levando para a página da hamburgueria no iFood nos fins de semana, combinada com uma campanha de visitas ao perfil do Instagram para ganhar seguidores.",
          metricas: [
            {
              valor: "1.874",
              rotulo: "Visitas à página do iFood"
            },
            {
              valor: "R$0,59",
              rotulo: "Custo por visita ao iFood"
            },
            {
              valor: "441",
              rotulo: "Visitas ao perfil do Instagram"
            },
            {
              valor: "71.145",
              rotulo: "Pessoas alcançadas · campanha iFood"
            }
          ],
          resumo: {
            valor: "R$0,59",
            texto: "por visita à página do iFood — 1.874 visitas e 71.145 pessoas alcançadas em setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/3675burguer/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · setembro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "reinaldo-junqueira",
      nicho: "negocio-local",
      nome: "Reinaldo Junqueira",
      descricao: "Escola de tênis",
      local: "Brasil",
      destaques: [
        {
          valor: "67",
          rotulo: "Conversões"
        },
        {
          valor: "R$12,33",
          rotulo: "Custo por conversão"
        }
      ],
      plataformas: [
        {
          tipo: "google",
          tags: [
            "Search",
            "Leads"
          ],
          estrategia: "Campanhas de pesquisa no Google voltadas à captação de leads pelo site, acompanhadas pelo custo por conversão.",
          metricas: [
            {
              valor: "67",
              rotulo: "Conversões"
            },
            {
              valor: "R$12,33",
              rotulo: "Custo por conversão"
            },
            {
              valor: "266",
              rotulo: "Cliques"
            },
            {
              valor: "R$826",
              rotulo: "Investimento"
            }
          ],
          resumo: {
            valor: "R$12,33",
            texto: "por conversão — 67 conversões com R$826 investidos entre 1 e 25 de setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/reinaldo-junqueira/google-01.png",
              legenda: "Google Ads · 1 a 25 de setembro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "smooth-body-wax",
      nicho: "clinica",
      nome: "Smooth Body Wax",
      descricao: "Depilação & Estética",
      local: "Estados Unidos",
      logo: "assets/cases/smooth-body-wax/logo.png",
      destaques: [
        { valor: "498%", rotulo: "ROAS no Google Ads" },
        { valor: "196", rotulo: "Leads no Meta Ads" }
      ],
      plataformas: [
        {
          tipo: "google",
          tags: ["Search", "Performance Max"],
          contexto: "Clínica de depilação e estética nos EUA já ativa no Google Ads, porém com estrutura de campanhas inadequada para o mercado local e verba mal distribuída entre os serviços oferecidos.",
          desafio: "ROAS de apenas 46% e 30 agendamentos por mês. Os anúncios não comunicavam os diferenciais da clínica e as palavras-chave negativas eram praticamente inexistentes.",
          estrategia: "Reestruturação completa das campanhas com segmentação por serviço, refinamento extensivo de palavras-chave negativas e otimização de lances por conversão. O investimento foi aumentado gradualmente conforme o ROAS se consolidava acima da meta.",
          antes: [
            { valor: "$800", rotulo: "Investimento" },
            { valor: "46,41%", rotulo: "ROAS" },
            { valor: "30/mês", rotulo: "Agendamentos" }
          ],
          depois: [
            { valor: "$1.260", rotulo: "Investimento" },
            { valor: "498,14%", rotulo: "ROAS" },
            { valor: "91/mês", rotulo: "Agendamentos" },
            { valor: "$78.000", rotulo: "Faturamento" }
          ],
          resumo: {
            valor: "+973%",
            texto: "de aumento no ROAS — de 46% para 498%, triplicando os agendamentos com apenas 57% a mais de investimento."
          },
          prints: [
            { src: "assets/cases/smooth-body-wax/google-01.jpg", legenda: "Google Ads · novembro de 2025" },
            { src: "assets/cases/smooth-body-wax/google-02.jpg", legenda: "Google Analytics · novembro de 2025" }
          ]
        },
        {
          tipo: "meta",
          tags: ["Facebook", "Instagram", "Leads"],
          contexto: "Clínica sem histórico em Meta Ads. Já gerenciávamos o Google Ads da conta — expandimos a presença para o Meta para diversificar a captação de agendamentos.",
          desafio: "Gerar leads e agendamentos qualificados via Meta com custo por resultado competitivo, em paralelo com as campanhas de Google Ads já ativas.",
          estrategia: "Campanhas de geração de leads com formulário nativo do Meta (New Clients) e remarketing para visitantes do site vindos do Google (RMKT Google). Segmentação por raio geográfico ao redor da clínica com públicos por interesse em beleza e estética.",
          metricas: [
            { valor: "196", rotulo: "Leads gerados" },
            { valor: "21", rotulo: "Agendamentos confirmados" },
            { valor: "$2,16", rotulo: "Custo por lead (new clients)" },
            { valor: "$583", rotulo: "Investimento total" }
          ],
          resumo: {
            valor: "$2,16",
            texto: "custo por lead — 196 leads gerados e 21 agendamentos confirmados com $583 de investimento no Meta Ads."
          },
          prints: [
            { src: "assets/cases/smooth-body-wax/meta-01.jpg", legenda: "Gerenciador de Anúncios Meta · campanhas de leads" }
          ]
        }
      ]
    },

    {
      id: "mb-med-spa",
      nicho: "clinica",
      nome: "MB Med Spa",
      descricao: "Med Spa",
      local: "Estados Unidos",
      logo: "assets/cases/mb-med-spa/logo.png",
      destaques: [
        { valor: "610%", rotulo: "ROAS alcançado" },
        { valor: "$8,61", rotulo: "Custo por lead" }
      ],
      plataformas: [
        {
          tipo: "google",
          tags: ["Search", "Leads"],
          contexto: "Med spa americana sem nenhum histórico em Google Ads. A clínica dependia exclusivamente de indicações e tráfego orgânico para captação de novos clientes.",
          desafio: "Construir do zero uma presença paga no Google com orçamento enxuto de $267, gerando leads qualificados e mensuráveis em um mercado altamente competitivo.",
          estrategia: "Criação da conta e estrutura focada em buscas de alta intenção — serviços específicos combinados com localização geográfica. Meta de CPL definida desde o início para garantir retorno real mesmo com verba reduzida.",
          metricas: [
            { valor: "610%", rotulo: "ROAS alcançado" },
            { valor: "31", rotulo: "Leads gerados" },
            { valor: "$8,61", rotulo: "Custo por lead" },
            { valor: "$267", rotulo: "Investimento total" },
            { valor: "$1.630", rotulo: "Faturamento gerado" }
          ],
          resumo: {
            valor: "Do zero",
            texto: "Conta criada do zero — 610% de ROAS e 31 leads qualificados via WhatsApp com apenas $267 de investimento."
          },
          prints: [
            { src: "assets/cases/mb-med-spa/google-01.jpg", legenda: "Google Ads · junho de 2026" }
          ]
        }
      ]
    },

    {
      id: "dra-pamela-casagrande",
      nicho: "clinica",
      nome: "Dra. Pamela Casagrande",
      descricao: "Clínica Médica",
      local: "Brasil",
      logo: "assets/cases/dra-pamela-casagrande/logo.png",
      destaques: [
        { valor: "R$102.836", rotulo: "Vendas no CRM" },
        { valor: "580", rotulo: "Conversas no Meta Ads" }
      ],
      plataformas: [
        {
          tipo: "google",
          tags: ["Search", "WhatsApp Leads"],
          contexto: "Médica com clínica própria no Brasil sem presença anterior em Google Ads. Precisava escalar o volume de consultas e procedimentos com investimento mensal acessível.",
          desafio: "Gerar alto volume de leads qualificados com custo por lead abaixo da média do setor médico, sem nenhum histórico de dados de conversão para basear as otimizações iniciais.",
          estrategia: "Campanhas segmentadas por especialidade e tipo de procedimento, com foco em palavras-chave de média cauda e alta intenção de agendamento. Conversões rastreadas via WhatsApp com otimização contínua.",
          metricas: [
            { valor: "216", rotulo: "Leads gerados" },
            { valor: "R$7,92", rotulo: "Custo por lead" },
            { valor: "R$1.709", rotulo: "Investimento total" }
          ],
          resumo: {
            valor: "R$7,92",
            texto: "por lead — 216 conversões abaixo da média do setor médico, com conta criada e estruturada do zero."
          },
          prints: [
            { src: "assets/cases/dra-pamela-casagrande/google-01.jpg", legenda: "Google Ads · junho de 2026" },
            { src: "assets/cases/dra-pamela-casagrande/google-02.png", legenda: "Google Ads · 17 de julho a 28 de setembro de 2026 · 204 leads" }
          ]
        },
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "WhatsApp"
          ],
          estrategia: "Campanhas de engajamento e de mensagens no WhatsApp com o tema emagrecimento, somadas a um remarketing para quem chegou ao site pelo Google.",
          metricas: [
            {
              valor: "580",
              rotulo: "Conversas iniciadas"
            },
            {
              valor: "R$16,99",
              rotulo: "Custo por conversa"
            },
            {
              valor: "272.663",
              rotulo: "Pessoas alcançadas"
            },
            {
              valor: "R$12.424",
              rotulo: "Investimento total"
            }
          ],
          resumo: {
            valor: "580",
            texto: "conversas iniciadas no WhatsApp a R$16,99 cada, com 272.663 pessoas alcançadas entre junho e setembro de 2026."
          },
          prints: [
            {
              src: "assets/cases/dra-pamela-casagrande/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · 1 de junho a 29 de setembro de 2026"
            }
          ]
        },
        {
          tipo: "crm",
          tags: [
            "Kommo"
          ],
          metricas: [
            {
              valor: "R$102.836",
              rotulo: "Vendas realizadas"
            },
            {
              valor: "12",
              rotulo: "Vendas fechadas"
            }
          ],
          resumo: {
            valor: "R$102.836",
            texto: "em vendas registradas no CRM da clínica — 12 leads na etapa de venda realizada."
          },
          prints: [
            {
              src: "assets/cases/dra-pamela-casagrande/crm-01.png",
              legenda: "Kommo CRM · leads ganhos (nomes e telefones dos pacientes fora do recorte)"
            }
          ]
        }
      ]
    },

    {
      id: "edmundo-souza",
      nicho: "marketing-politico",
      nome: "Edmundo Souza",
      descricao: "Comunicação política",
      local: "Brasil",
      destaques: [
        {
          valor: "25,3 mi",
          rotulo: "Impressões"
        },
        {
          valor: "266 mil",
          rotulo: "Visitas ao perfil"
        }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Reconhecimento",
            "Tráfego"
          ],
          estrategia: "Campanhas de reconhecimento com distribuição municipal e local, campanhas de tráfego para o perfil, remarketing na reta final e divulgação de agendas e Reels.",
          metricas: [
            {
              valor: "25,3 mi",
              rotulo: "Impressões · soma das campanhas"
            },
            {
              valor: "3,49 mi",
              rotulo: "Pessoas alcançadas · maior campanha"
            },
            {
              valor: "266 mil",
              rotulo: "Visitas ao perfil"
            },
            {
              valor: "856 mil",
              rotulo: "ThruPlays"
            },
            {
              valor: "R$193.224",
              rotulo: "Investimento · soma das campanhas"
            }
          ],
          resumo: {
            valor: "25,3 mi",
            texto: "de impressões em sete campanhas, com 266 mil visitas ao perfil a partir de R$0,43 cada, entre 1 de setembro e 1 de outubro de 2026."
          },
          prints: [
            {
              src: "assets/cases/edmundo-souza/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · 1 de setembro a 1 de outubro de 2026"
            }
          ]
        }
      ]
    },

    {
      id: "ulisses-guimaraes",
      nicho: "marketing-politico",
      nome: "Ulisses Guimarães",
      descricao: "Comunicação política",
      local: "Brasil",
      destaques: [
        {
          valor: "11,4 mi",
          rotulo: "Impressões"
        },
        {
          valor: "4.692",
          rotulo: "Leads engajados"
        }
      ],
      plataformas: [
        {
          tipo: "meta",
          tags: [
            "Facebook",
            "Instagram",
            "Reconhecimento",
            "Leads"
          ],
          estrategia: "Funil em duas etapas: no topo, campanhas de reconhecimento e distribuição de vídeos por núcleos regionais; no meio, campanhas de leads e de tráfego para aprofundar o contato com quem já foi alcançado.",
          metricas: [
            {
              valor: "11,4 mi",
              rotulo: "Impressões · soma das campanhas"
            },
            {
              valor: "1,07 mi",
              rotulo: "Pessoas alcançadas · maior campanha"
            },
            {
              valor: "4.692",
              rotulo: "Leads engajados"
            },
            {
              valor: "R$4,49",
              rotulo: "Custo por lead engajado"
            },
            {
              valor: "204 mil",
              rotulo: "ThruPlays"
            },
            {
              valor: "R$131.775",
              rotulo: "Investimento · soma das campanhas"
            }
          ],
          resumo: {
            valor: "11,4 mi",
            texto: "de impressões em oito campanhas, com 4.692 leads engajados a R$4,49 cada, entre 2 de setembro e 1 de outubro de 2026."
          },
          prints: [
            {
              src: "assets/cases/ulisses-guimaraes/meta-01.png",
              legenda: "Gerenciador de Anúncios Meta · 2 de setembro a 1 de outubro de 2026"
            }
          ]
        }
      ]
    }
  ]
};

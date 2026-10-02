(function () {
  var dados = window.PORTFOLIO;
  var PLATAFORMAS = {
    google: { nome: "Google Ads", prova: "Comprovação · prints do Google Ads" },
    meta: { nome: "Meta Ads", prova: "Comprovação · prints do gerenciador Meta" },
    crm: { nome: "Vendas no CRM", prova: "Comprovação · print do CRM" }
  };

  function esc(texto) {
    return String(texto == null ? "" : texto).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function selos(cliente) {
    return cliente.plataformas.filter(function (p) { return p.tipo !== "crm"; }).map(function (p) {
      return '<span class="selo selo-' + p.tipo + '">' + PLATAFORMAS[p.tipo].nome + "</span>";
    }).join("");
  }

  function metricas(lista, classe) {
    return '<dl class="metricas ' + (classe || "") + '">' + lista.map(function (m) {
      return "<div><dt>" + esc(m.rotulo) + "</dt><dd>" + esc(m.valor) + "</dd></div>";
    }).join("") + "</dl>";
  }

  /* ---------- Página ---------- */

  function montarCapa() {
    document.getElementById("kpis").innerHTML = dados.capa.kpis.map(function (k) {
      return "<div><dd>" + esc(k.valor) + "</dd><dt>" + esc(k.rotulo) + "</dt></div>";
    }).join("");
  }

  var paginaInicio = document.getElementById("pagina-inicio");
  var paginaNicho = document.getElementById("pagina-nicho");
  var nichoAtual = null;

  function clientesDo(nichoId) {
    return dados.clientes.filter(function (c) { return c.nicho === nichoId; });
  }

  function contagem(total) {
    return total + (total === 1 ? " case" : " cases");
  }

  function montarBotoes() {
    var numero = 0;
    document.getElementById("nichos-botoes").innerHTML = dados.nichos.map(function (nicho) {
      var total = clientesDo(nicho.id).length;
      if (!total) return "";
      numero += 1;
      return (
        '<a class="botao-nicho" href="#nicho-' + nicho.id + '">' +
          '<span class="botao-numero">' + (numero < 10 ? "0" : "") + numero + "</span>" +
          '<span class="botao-nome">' + esc(nicho.nome) + "</span>" +
          '<span class="botao-base">' +
            '<span class="contagem">' + contagem(total) + "</span>" +
            '<span class="seta" aria-hidden="true">&rarr;</span>' +
          "</span>" +
        "</a>"
      );
    }).join("");
  }

  function mostrarInicio() {
    if (nichoAtual === null) return;
    nichoAtual = null;
    paginaNicho.hidden = true;
    paginaInicio.hidden = false;
    window.scrollTo(0, 0);
  }

  function mostrarNicho(id) {
    var nicho = dados.nichos.filter(function (n) { return n.id === id; })[0];
    var clientes = clientesDo(id);
    if (!nicho || !clientes.length) return false;
    if (nichoAtual === id) return true;

    nichoAtual = id;
    paginaNicho.innerHTML =
      '<section class="nicho">' +
        '<div class="container">' +
          '<a class="voltar" href="#inicio"><span aria-hidden="true">&larr;</span> Todos os nichos</a>' +
          '<header class="nicho-topo">' +
            '<p class="sobretitulo">Nicho · ' + contagem(clientes.length) + "</p>" +
            "<h1>" + esc(nicho.nome) + "</h1>" +
          "</header>" +
          '<div class="grade">' + clientes.map(cartao).join("") + "</div>" +
        "</div>" +
      "</section>";
    paginaInicio.hidden = true;
    paginaNicho.hidden = false;
    window.scrollTo(0, 0);
    return true;
  }

  function cartao(cliente) {
    return (
      '<a class="cartao" href="#case-' + cliente.id + '">' +
        '<div class="cartao-topo">' +
          "<div>" +
            "<h3>" + esc(cliente.nome) + "</h3>" +
            "<p>" + esc(cliente.descricao) + " · " + esc(cliente.local) + "</p>" +
          "</div>" +
        "</div>" +
        metricas(cliente.destaques, "metricas-cartao") +
        '<div class="cartao-base">' +
          '<span class="selos">' + selos(cliente) + "</span>" +
          '<span class="ver">Ver case <span aria-hidden="true">&rarr;</span></span>' +
        "</div>" +
      "</a>"
    );
  }

  /* ---------- Case ---------- */

  var caseDialog = document.getElementById("case");
  var caseConteudo = document.getElementById("case-conteudo");
  var printsAbertos = [];

  /* Contexto e desafio são opcionais: só aparece o que o case tiver */
  function narrativa(p) {
    var partes = [["Contexto", p.contexto], ["Desafio", p.desafio], ["Estratégia", p.estrategia]].filter(function (parte) {
      return parte[1];
    });
    if (!partes.length) return "";
    return '<div class="narrativa colunas-' + partes.length + '">' + partes.map(function (parte) {
      return "<div><h5>" + parte[0] + "</h5><p>" + esc(parte[1]) + "</p></div>";
    }).join("") + "</div>";
  }

  function blocoPlataforma(p) {
    var info = PLATAFORMAS[p.tipo];
    var numeros = p.antes
      ? '<div class="antes-depois">' +
          '<div class="lado"><h5>Antes</h5>' + metricas(p.antes) + "</div>" +
          '<div class="lado depois"><h5>Depois</h5>' + metricas(p.depois) + "</div>" +
        "</div>"
      : metricas(p.metricas);

    var prints = p.prints.map(function (print) {
      var indice = printsAbertos.push(print) - 1;
      return (
        "<figure>" +
          '<button class="print" type="button" data-print="' + indice + '" aria-label="Ampliar print: ' + esc(print.legenda) + '">' +
            '<img src="' + esc(print.src) + '" alt="' + esc(print.legenda) + '" loading="lazy">' +
          "</button>" +
          "<figcaption>" + esc(print.legenda) + "</figcaption>" +
        "</figure>"
      );
    }).join("");

    return (
      '<section class="plataforma">' +
        '<header class="plataforma-topo">' +
          '<h4 class="selo selo-' + p.tipo + '">' + info.nome + "</h4>" +
          '<span class="tags">' + (p.tags || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</span>" +
        "</header>" +
        narrativa(p) +
        numeros +
        (p.resumo ? '<p class="resumo"><strong>' + esc(p.resumo.valor) + "</strong><span>" + esc(p.resumo.texto) + "</span></p>" : "") +
        '<h5 class="prova">' + info.prova + "</h5>" +
        '<div class="prints">' + prints + "</div>" +
      "</section>"
    );
  }

  function abrirCase(id) {
    var cliente = dados.clientes.filter(function (c) { return c.id === id; })[0];
    if (!cliente) return false;
    var nicho = dados.nichos.filter(function (n) { return n.id === cliente.nicho; })[0];

    printsAbertos = [];
    caseConteudo.innerHTML =
      '<header class="case-topo">' +
        "<div>" +
          '<p class="sobretitulo">' + esc(nicho.nome) + " · " + esc(cliente.local) + "</p>" +
          '<h3 id="case-titulo">' + esc(cliente.nome) + "</h3>" +
          "<p>" + esc(cliente.descricao) + "</p>" +
        "</div>" +
      "</header>" +
      cliente.plataformas.map(blocoPlataforma).join("");

    if (!caseDialog.open) caseDialog.showModal();
    caseDialog.scrollTop = 0;
    return true;
  }

  /* Ao fechar o case, o endereço volta para a página do nicho que está por trás */
  function sairDoCase() {
    if (location.hash.indexOf("#case-") === 0) {
      history.replaceState(null, "", location.pathname + location.search + (nichoAtual ? "#nicho-" + nichoAtual : ""));
    }
  }

  function rota() {
    var hash = location.hash;

    if (hash.indexOf("#case-") === 0) {
      var cliente = dados.clientes.filter(function (c) { return c.id === hash.slice(6); })[0];
      if (cliente && mostrarNicho(cliente.nicho) && abrirCase(cliente.id)) return;
    }

    if (caseDialog.open) caseDialog.close();
    if (hash.indexOf("#nicho-") === 0 && mostrarNicho(hash.slice(7))) return;
    mostrarInicio();
  }

  caseDialog.addEventListener("close", sairDoCase);

  /* ---------- Zoom dos prints ---------- */

  var zoom = document.getElementById("zoom");
  var zoomImg = document.getElementById("zoom-img");
  var zoomLegenda = document.getElementById("zoom-legenda");
  var zoomAtual = 0;

  function mostrarPrint(indice) {
    zoomAtual = (indice + printsAbertos.length) % printsAbertos.length;
    var print = printsAbertos[zoomAtual];
    zoomImg.src = print.src;
    zoomImg.alt = print.legenda;
    zoomLegenda.textContent = print.legenda;
    zoom.classList.toggle("unico", printsAbertos.length < 2);
    if (!zoom.open) zoom.showModal();
  }

  caseConteudo.addEventListener("click", function (e) {
    var botao = e.target.closest("[data-print]");
    if (botao) mostrarPrint(Number(botao.dataset.print));
  });
  document.getElementById("zoom-anterior").addEventListener("click", function () { mostrarPrint(zoomAtual - 1); });
  document.getElementById("zoom-proximo").addEventListener("click", function () { mostrarPrint(zoomAtual + 1); });
  zoom.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") mostrarPrint(zoomAtual - 1);
    if (e.key === "ArrowRight") mostrarPrint(zoomAtual + 1);
  });

  /* Fecha pelo botão ou clicando fora da caixa */
  [caseDialog, zoom].forEach(function (dialog) {
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog || e.target.closest("[data-fechar]")) dialog.close();
    });
  });

  montarCapa();
  montarBotoes();
  window.addEventListener("hashchange", rota);
  rota();
})();

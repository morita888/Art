const materias = [
  {
    "semestre": 1,
    "nombre": "Dibujo I",
    "id": "dibujo_i",
    "creditos": 3,
    "abre": [
      "dibujo_ii"
    ]
  },
  {
    "semestre": 1,
    "nombre": "Est\u00e9tica Cl\u00e1sica",
    "id": "est\u00e9tica_cl\u00e1sica",
    "creditos": 2,
    "abre": [
      "est\u00e9tica_moderna"
    ]
  },
  {
    "semestre": 1,
    "nombre": "Teolog\u00eda",
    "id": "teolog\u00eda",
    "creditos": 2,
    "abre": []
  },
  {
    "semestre": 1,
    "nombre": "Historia del Arte I",
    "id": "historia_del_arte_i",
    "creditos": 3,
    "abre": [
      "historia_del_arte_ii"
    ]
  },
  {
    "semestre": 1,
    "nombre": "Fotograf\u00eda",
    "id": "fotograf\u00eda",
    "creditos": 3,
    "abre": [
      "taller_de_fotograf\u00eda"
    ]
  },
  {
    "semestre": 1,
    "nombre": "Teor\u00eda del Color",
    "id": "teor\u00eda_del_color",
    "creditos": 3,
    "abre": [
      "t\u00e9cnicas_pict\u00f3ricas"
    ]
  },
  {
    "semestre": 1,
    "nombre": "Humanidades",
    "id": "humanidades",
    "creditos": 2,
    "abre": []
  },
  {
    "semestre": 2,
    "nombre": "Dibujo II",
    "id": "dibujo_ii",
    "creditos": 3,
    "abre": [
      "dibujo_iii"
    ]
  },
  {
    "semestre": 2,
    "nombre": "Est\u00e9tica Moderna",
    "id": "est\u00e9tica_moderna",
    "creditos": 2,
    "abre": [
      "est\u00e9tica_contempor\u00e1nea",
      "semi\u00f3tica_i"
    ]
  },
  {
    "semestre": 2,
    "nombre": "Constituci\u00f3n pol\u00edtica",
    "id": "constituci\u00f3n_pol\u00edtica",
    "creditos": 2,
    "abre": []
  },
  {
    "semestre": 2,
    "nombre": "Escritura en el contexto",
    "id": "escritura_en_el_contexto",
    "creditos": 2,
    "abre": [
      "investigaci\u00f3n_en_artes_i"
    ]
  },
  {
    "semestre": 2,
    "nombre": "Historia del Arte II",
    "id": "historia_del_arte_ii",
    "creditos": 3,
    "abre": [
      "historia_del_arte_iii"
    ]
  },
  {
    "semestre": 2,
    "nombre": "Taller de fotograf\u00eda",
    "id": "taller_de_fotograf\u00eda",
    "creditos": 3,
    "abre": [
      "video"
    ]
  },
  {
    "semestre": 2,
    "nombre": "T\u00e9cnicas pict\u00f3ricas",
    "id": "t\u00e9cnicas_pict\u00f3ricas",
    "creditos": 3,
    "abre": [
      "introducci\u00f3n_a_la_tridimensi\u00f3n"
    ]
  },
  {
    "semestre": 3,
    "nombre": "Dibujo III",
    "id": "dibujo_iii",
    "creditos": 3,
    "abre": [
      "dibujo_iv"
    ]
  },
  {
    "semestre": 3,
    "nombre": "Est\u00e9tica contempor\u00e1nea",
    "id": "est\u00e9tica_contempor\u00e1nea",
    "creditos": 2,
    "abre": []
  },
  {
    "semestre": 3,
    "nombre": "Semi\u00f3tica I",
    "id": "semi\u00f3tica_i",
    "creditos": 2,
    "abre": [
      "semi\u00f3tica_ii"
    ]
  },
  {
    "semestre": 3,
    "nombre": "Historia del Arte III",
    "id": "historia_del_arte_iii",
    "creditos": 3,
    "abre": [
      "historia_del_arte_iv"
    ]
  },
  {
    "semestre": 3,
    "nombre": "Video",
    "id": "video",
    "creditos": 3,
    "abre": [
      "taller_audiovisual"
    ]
  },
  {
    "semestre": 3,
    "nombre": "Introducci\u00f3n a la tridimensi\u00f3n",
    "id": "introducci\u00f3n_a_la_tridimensi\u00f3n",
    "creditos": 3,
    "abre": [
      "escultura"
    ]
  },
  {
    "semestre": 3,
    "nombre": "Ingl\u00e9s I",
    "id": "ingl\u00e9s_i",
    "creditos": 2,
    "abre": [
      "ingles_ii"
    ]
  },
  {
    "semestre": 4,
    "nombre": "Dibujo IV",
    "id": "dibujo_iv",
    "creditos": 3,
    "abre": [
      "grabado_i"
    ]
  },
  {
    "semestre": 4,
    "nombre": "Semi\u00f3tica II",
    "id": "semi\u00f3tica_ii",
    "creditos": 2,
    "abre": []
  },
  {
    "semestre": 4,
    "nombre": "Investigaci\u00f3n en Artes I",
    "id": "investigaci\u00f3n_en_artes_i",
    "creditos": 3,
    "abre": [
      "investigaci\u00f3n_en_artes_ii"
    ]
  },
  {
    "semestre": 4,
    "nombre": "Historia del arte IV",
    "id": "historia_del_arte_iv",
    "creditos": 2,
    "abre": [
      "historia_del_arte_en_latinoam\u00e9rica"
    ]
  },
  {
    "semestre": 4,
    "nombre": "Taller audiovisual",
    "id": "taller_audiovisual",
    "creditos": 3,
    "abre": []
  },
  {
    "semestre": 4,
    "nombre": "Escultura",
    "id": "escultura",
    "creditos": 3,
    "abre": []
  },
  {
    "semestre": 4,
    "nombre": "Ingles II",
    "id": "ingles_ii",
    "creditos": 2,
    "abre": [
      "ingles_iii"
    ]
  },
  {
    "semestre": 5,
    "nombre": "Grabado I",
    "id": "grabado_i",
    "creditos": 2,
    "abre": [
      "grabado_ii"
    ]
  },
  {
    "semestre": 5,
    "nombre": "Imagen, dibujo y texto digital",
    "id": "imagen,_dibujo_y_texto_digital",
    "creditos": 3,
    "abre": [
      "dise\u00f1o_digital_animado"
    ]
  },
  {
    "semestre": 5,
    "nombre": "Investigaci\u00f3n en Artes II",
    "id": "investigaci\u00f3n_en_artes_ii",
    "creditos": 3,
    "abre": [
      "dise\u00f1o_de_proyectos"
    ]
  },
  {
    "semestre": 5,
    "nombre": "Historia del arte en Latinoam\u00e9rica",
    "id": "historia_del_arte_en_latinoam\u00e9rica",
    "creditos": 2,
    "abre": [
      "historia_del_arte_en_colombia"
    ]
  },
  {
    "semestre": 5,
    "nombre": "Narraci\u00f3n Audiovisual",
    "id": "narraci\u00f3n_audiovisual",
    "creditos": 3,
    "abre": [
      "animaci\u00f3n_audiovisual"
    ]
  },
  {
    "semestre": 5,
    "nombre": "Taller bidimensional",
    "id": "taller_bidimensional",
    "creditos": 3,
    "abre": [
      "taller_de_pintura"
    ]
  },
  {
    "semestre": 5,
    "nombre": "Ingles III",
    "id": "ingles_iii",
    "creditos": 2,
    "abre": [
      "ingles_iv"
    ]
  },
  {
    "semestre": 6,
    "nombre": "Grabado II",
    "id": "grabado_ii",
    "creditos": 2,
    "abre": []
  },
  {
    "semestre": 6,
    "nombre": "Dise\u00f1o Digital animado",
    "id": "dise\u00f1o_digital_animado",
    "creditos": 3,
    "abre": [
      "dise\u00f1o_web"
    ]
  },
  {
    "semestre": 6,
    "nombre": "Dise\u00f1o de proyectos",
    "id": "dise\u00f1o_de_proyectos",
    "creditos": 2,
    "abre": [
      "gesti\u00f3n_cultural"
    ]
  },
  {
    "semestre": 6,
    "nombre": "Historia del Arte en Colombia",
    "id": "historia_del_arte_en_colombia",
    "creditos": 2,
    "abre": []
  },
  {
    "semestre": 6,
    "nombre": "Animaci\u00f3n audiovisual",
    "id": "animaci\u00f3n_audiovisual",
    "creditos": 3,
    "abre": [
      "puesta_en_escena"
    ]
  },
  {
    "semestre": 6,
    "nombre": "Taller de pintura",
    "id": "taller_de_pintura",
    "creditos": 3,
    "abre": [
      "taller_tridimensional"
    ]
  },
  {
    "semestre": 6,
    "nombre": "Electiva",
    "id": "electiva",
    "creditos": 3,
    "abre": []
  },
  {
    "semestre": 7,
    "nombre": "\u00c9tica",
    "id": "\u00e9tica",
    "creditos": 2,
    "abre": []
  },
  {
    "semestre": 7,
    "nombre": "Dise\u00f1o web",
    "id": "dise\u00f1o_web",
    "creditos": 3,
    "abre": []
  },
  {
    "semestre": 7,
    "nombre": "Gesti\u00f3n Cultural",
    "id": "gesti\u00f3n_cultural",
    "creditos": 2,
    "abre": []
  },
  {
    "semestre": 7,
    "nombre": "Anteproyecto de grado",
    "id": "anteproyecto_de_grado",
    "creditos": 3,
    "abre": [
      "practica_en_artes",
      "proyecto_de_grado"
    ]
  },
  {
    "semestre": 7,
    "nombre": "Puesta en Escena",
    "id": "puesta_en_escena",
    "creditos": 3,
    "abre": [
      "montaje_audiovisual"
    ]
  },
  {
    "semestre": 7,
    "nombre": "Taller tridimensional",
    "id": "taller_tridimensional",
    "creditos": 3,
    "abre": [
      "taller_de_escultura"
    ]
  },
  {
    "semestre": 7,
    "nombre": "Ingles IV",
    "id": "ingles_iv",
    "creditos": 2,
    "abre": []
  },
  {
    "semestre": 8,
    "nombre": "Practica en Artes",
    "id": "practica_en_artes",
    "creditos": 5,
    "abre": []
  },
  {
    "semestre": 8,
    "nombre": "Proyecto de grado",
    "id": "proyecto_de_grado",
    "creditos": 4,
    "abre": []
  },
  {
    "semestre": 8,
    "nombre": "Montaje Audiovisual",
    "id": "montaje_audiovisual",
    "creditos": 3,
    "abre": []
  },
  {
    "semestre": 8,
    "nombre": "Taller de Escultura",
    "id": "taller_de_escultura",
    "creditos": 3,
    "abre": []
  },
  {
    "semestre": 8,
    "nombre": "Electiva",
    "id": "electiva_2",
    "creditos": 3,
    "abre": []
  }
];

const desbloqueos = {
  "dibujo_ii": [
    "dibujo_i"
  ],
  "est\u00e9tica_moderna": [
    "est\u00e9tica_cl\u00e1sica"
  ],
  "historia_del_arte_ii": [
    "historia_del_arte_i"
  ],
  "taller_de_fotograf\u00eda": [
    "fotograf\u00eda"
  ],
  "t\u00e9cnicas_pict\u00f3ricas": [
    "teor\u00eda_del_color"
  ],
  "dibujo_iii": [
    "dibujo_ii"
  ],
  "est\u00e9tica_contempor\u00e1nea": [
    "est\u00e9tica_moderna"
  ],
  "semi\u00f3tica_i": [
    "est\u00e9tica_moderna"
  ],
  "investigaci\u00f3n_en_artes_i": [
    "escritura_en_el_contexto"
  ],
  "historia_del_arte_iii": [
    "historia_del_arte_ii"
  ],
  "video": [
    "taller_de_fotograf\u00eda"
  ],
  "introducci\u00f3n_a_la_tridimensi\u00f3n": [
    "t\u00e9cnicas_pict\u00f3ricas"
  ],
  "dibujo_iv": [
    "dibujo_iii"
  ],
  "semi\u00f3tica_ii": [
    "semi\u00f3tica_i"
  ],
  "historia_del_arte_iv": [
    "historia_del_arte_iii"
  ],
  "taller_audiovisual": [
    "video"
  ],
  "escultura": [
    "introducci\u00f3n_a_la_tridimensi\u00f3n"
  ],
  "ingles_ii": [
    "ingl\u00e9s_i"
  ],
  "grabado_i": [
    "dibujo_iv"
  ],
  "investigaci\u00f3n_en_artes_ii": [
    "investigaci\u00f3n_en_artes_i"
  ],
  "historia_del_arte_en_latinoam\u00e9rica": [
    "historia_del_arte_iv"
  ],
  "ingles_iii": [
    "ingles_ii"
  ],
  "grabado_ii": [
    "grabado_i"
  ],
  "dise\u00f1o_digital_animado": [
    "imagen,_dibujo_y_texto_digital"
  ],
  "dise\u00f1o_de_proyectos": [
    "investigaci\u00f3n_en_artes_ii"
  ],
  "historia_del_arte_en_colombia": [
    "historia_del_arte_en_latinoam\u00e9rica"
  ],
  "animaci\u00f3n_audiovisual": [
    "narraci\u00f3n_audiovisual"
  ],
  "taller_de_pintura": [
    "taller_bidimensional"
  ],
  "ingles_iv": [
    "ingles_iii"
  ],
  "dise\u00f1o_web": [
    "dise\u00f1o_digital_animado"
  ],
  "gesti\u00f3n_cultural": [
    "dise\u00f1o_de_proyectos"
  ],
  "puesta_en_escena": [
    "animaci\u00f3n_audiovisual"
  ],
  "taller_tridimensional": [
    "taller_de_pintura"
  ],
  "practica_en_artes": [
    "anteproyecto_de_grado"
  ],
  "proyecto_de_grado": [
    "anteproyecto_de_grado"
  ],
  "montaje_audiovisual": [
    "puesta_en_escena"
  ],
  "taller_de_escultura": [
    "taller_tridimensional"
  ]
};
const aprobadas = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  materias.forEach(m => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = m.id;
    div.dataset.semestre = m.semestre;
    div.innerHTML = `<strong>${m.nombre}</strong><br>(${
      m.creditos
    } Créditos)`;
    if (!desbloqueos[m.id]) div.classList.remove("bloqueado");
    else div.classList.add("bloqueado");

    div.onclick = () => {
      if (!div.classList.contains("bloqueado")) {
        div.classList.toggle("aprobado");
        const activo = div.classList.contains("aprobado");
        if (activo) aprobadas.add(m.id);
        else aprobadas.delete(m.id);
        actualizarMalla();
      }
    };

    contenedor.appendChild(div);
  });
}

function actualizarMalla() {
  let totalCreditos = 0;
  materias.forEach(m => {
    const div = document.getElementById(m.id);
    if (div.classList.contains("aprobado")) {
      totalCreditos += m.creditos;
    }
  });
  document.getElementById("creditos").textContent = totalCreditos;

  materias.forEach(m => {
    const div = document.getElementById(m.id);
    if (!desbloqueos[m.id]) return;
    const requisitos = desbloqueos[m.id];
    const habilitado = requisitos.every(id => aprobadas.has(id));
    if (habilitado) {
      div.classList.remove("bloqueado");
    } else {
      if (!div.classList.contains("aprobado")) {
        div.classList.add("bloqueado");
      }
    }
  });
}

document.getElementById("semestreSelect").addEventListener("change", function () {
  const selected = this.value;
  document.querySelectorAll(".ramo").forEach((el) => {
    if (selected === "todos" || el.dataset.semestre === selected) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
});

crearMalla();

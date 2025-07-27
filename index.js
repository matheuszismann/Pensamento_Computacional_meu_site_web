const movies = [
      {
          title: "Stranger Things",
              poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
                  youtubeId: "b9EkMc79ZSU"
                    },
                      {
                          title: "La Casa de Papel",
                              poster: "https://image.tmdb.org/t/p/w500/mT0fTqk4sMOwL2Nf7kji8w1CfME.jpg",
                                  youtubeId: "ZAXA1DV4dtI"
                                    },
                                      {
                                          title: "Breaking Bad",
                                              poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
                                                  youtubeId: "HhesaQXLuRY"
                                                    },
                                                      {
                                                          title: "The Witcher",
                                                              poster: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
                                                                  youtubeId: "tjujvMkqWe4"
                                                                    }
                                                                    ];

                                                                    const movieRow = document.getElementById('movie-row');
                                                                    const modal = document.getElementById('trailer-modal');
                                                                    const closeBtn = document.getElementById('close-btn');
                                                                    const trailerFrame = document.getElementById('trailer-frame');

                                                                    movies.forEach(movie => {
                                                                      const card = document.createElement('div');
                                                                        card.className = 'movie-card';
                                                                          card.innerHTML = `
                                                                              <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
                                                                                  <div class="movie-title">${movie.title}</div>
                                                                                    `;
                                                                                      card.onclick = () => {
                                                                                          trailerFrame.src = `https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1`;
                                                                                              modal.style.display = "flex";
                                                                                                };
                                                                                                  movieRow.appendChild(card);
                                                                                                  });

                                                                                                  closeBtn.onclick = () => {
                                                                                                    modal.style.display = "none";
                                                                                                      trailerFrame.src = "";
                                                                                                      };

                                                                                                      window.onclick = (e) => {
                                                                                                        if (e.target === modal) {
                                                                                                            modal.style.display = "none";
                                                                                                                trailerFrame.src = "";
                                                                                                                  }
                                                                                                                  };
]
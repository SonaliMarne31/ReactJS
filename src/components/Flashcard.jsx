import React from "react";
import i18next from 'https://deno.land/x/i18next/index.js'

export default function FlashCard(props) {
    // const { t, i18n } = useTranslation();
    i18next.init({
        lng: 'en', // if you're using a language detector, do not define the lng option
        debug: true,
        resources: {
          en: {
            translation: {
              "key": "hello world"
            }
          },
          de: {
            translation: {
                "key": "German"
            }
          }
        }
    });
    // i18next.changeLanguage('de');

    const words = [
        {
          "en": "Brother",
          "translation": "der Bruder"
        },
        {
          "en": "Cousin (m)",
          "translation": "der Cousin"
        }
    ];

    return(
        <div style={{padding: '10px'}}>
            {words.map((word, index) => {
                return(
                    <div className="card">
                        <div className="inner">
                            <div className="front">
                                <p>{word.en}</p>
                                {i18next.t('key')}
                            </div>
                            <div className="back">
                                {word.translation}
                            </div>
                        </div>
                    </div>
                );
            })

            }
        </div>
    );

}
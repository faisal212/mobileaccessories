import React from 'react'
import PageTransition from 'gatsby-v2-plugin-page-transitions';

export default function MainTransition({ children }) {
    const timeout = 400;

    return (
        <PageTransition
        transitionStyles={{
            entering: {
                position: 'relative',
                opacity: 1,
              },
              entered: {
                transition: `opacity ${timeout}ms ease-in-out`,
                opacity: 1,
              },
              exiting: {
                transition: `opacity ${timeout}ms ease-in-out`,
                opacity: 0,
              },
          }}
           
        >
            {children}
        </PageTransition>
    );

}
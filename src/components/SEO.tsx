import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Props = {
  title?: string,
  description?: string,
  image?: string
}

const SEO = ( { title, description } : Props ) => {

  const { site : { siteMetadata } } = useStaticQuery(
    graphql`
      query {
        site{ 
          siteMetadata {
            title,
            description,
            author,
            keywords,
            siteUrl
          }
        }
      }
    `
  )

  const SeoTags = [
    {
      name: 'description',
      content: description ? description : siteMetadata.description
    },
    {
      name: 'keywords',
      content: siteMetadata.keywords.join(',')
    },
    {
      property: 'og:title',
      content: title ? title : siteMetadata.title
    },
    {
      property: 'og:description',
      content: description ? description : siteMetadata.description
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:creator',
      content: siteMetadata.author
    },
    {
      name: 'twitter:title',
      content: title ? title: siteMetadata.title
    },
    {
      name: 'twitter:description',
      content: description ? description : siteMetadata.description
    },
    
  ]

  return (
    <>
      <Helmet
        title={title ? title: siteMetadata.title}
        meta={SeoTags}
        htmlAttributes={{lang: 'pl'}}
      >
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.salon-elizabeth.pl/",
              "name": "Salon kosmetyczny elizabeth",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+48-602-137-250",
              }
            }
          `}
       </script>
      </Helmet>
    </>
  );
};

export default SEO;
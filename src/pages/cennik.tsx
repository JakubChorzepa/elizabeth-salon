import * as React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header/Header.component"
import { 
  PriceListPageWrapper,
  PriceListWrapper,
  PriceListItem,
  ServiceCategory,
  ServiceWrapper,
  ServiceParagraph,
  PriceServiceParagraph
} from '../styles/cennik.styles';
import FlowerBackground from "../components/FlowerBackground/FlowerBackground.component";
import { graphql } from "gatsby";

type pricesListType = {
  id: string,
  name: string,
  price: string,
  serviceCategorie: {
    serviceName: string
  }
}

type serviceCategoryType = {
  id: string,
  serviceName: string
}

type dataType = {
  data: {
    elizabeth: {
      serviceCategories: [
        serviceCategoryType
      ]
      pricesLists: [
        pricesListType
      ]
    }
  }
}


const PriceList = ({ data }: dataType) => {
  const { elizabeth: { serviceCategories } } = data;
  const { elizabeth: { pricesLists } } = data;

  console.log(pricesLists);

  return (
    <Layout>
      <PriceListPageWrapper>
        <FlowerBackground />
        <Header>Cennik</Header>
        <PriceListWrapper>
          {
            serviceCategories.map((serviceCategory) => {
              return (
                <PriceListItem key={serviceCategory.id}>
                  <ServiceCategory>{serviceCategory.serviceName}</ServiceCategory>
                  {
                    pricesLists.map((priceList) => {
                      if(priceList.serviceCategorie.serviceName===serviceCategory.serviceName) {
                        return (
                          <ServiceWrapper key={priceList.id}>
                           <ServiceParagraph>{priceList.name}</ServiceParagraph>
                           <PriceServiceParagraph>{`${priceList.price} zł`}</PriceServiceParagraph>
                          </ServiceWrapper>
                        )
                      }
                    })
                  }
                </PriceListItem>
              )
            })
          }
        </PriceListWrapper>
      </PriceListPageWrapper>
    </Layout>
  )
}

export const query = graphql`
  query PriceListQuery  
    {
      elizabeth {
        serviceCategories(first: 20) {
          id
          serviceName
        }
        pricesLists(first: 500) {
          id
          name
          price
          serviceCategorie {
            serviceName
          }
        }
      }
    }
`

export default PriceList;
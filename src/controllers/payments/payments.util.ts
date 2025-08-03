import axios from 'axios';
import { handleError } from '../../errors/error-hndler';

export const createPaymentWithReference = async (
  ref: string,
  entity: string
) => {
  const options = {
    method: 'POST',
    url: 'https://stoplight.io/mocks/appypay/appypay-payment-gateway/44997391/references',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'pt-BR',
      Assertion: '',
      Accept: 'application/json',
      Authorization: 'Bearer 123',
    },
    data: { entity: '00348', referenceNumber: '440750163' },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    const errorResponse = handleError('Error sending payment reference', error);
    throw new Error(JSON.stringify(errorResponse));
  }
};

export const getSiglePaymentReference = async (reference: string) => {
  const options = {
    method: 'GET',
    url: `https://stoplight.io/mocks/appypay/appypay-payment-gateway/44997391/references/${reference}`,
    headers: {
      'Accept-Language': 'pt-BR',
      Assertion: '',
      Accept: 'application/json',
      Authorization: 'Bearer 123',
    },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    const errorResponse = handleError('Error geting payment reference', error);
    throw new Error(JSON.stringify(errorResponse));
  }
};

export const getAllPaymentReferenceByEntity = async (entity: string) => {
  const options = {
    method: 'GET',
    url: 'https://stoplight.io/mocks/appypay/appypay-payment-gateway/44997391/references',
    headers: {
      'Accept-Language': 'pt-BR',
      Assertion: '',
      Accept: 'application/json',
      Authorization: 'Bearer 123',
    },
  };

  try {
    const { data } = await axios.request(options);
    const filterByEntity = data.filter((item: any) => item.entity === entity);
    if (filterByEntity.length === 0) {
      const errorResponse = handleError(
        `No payment references found for entity: ${entity}`,
        null,
        404
      );
      throw new Error(JSON.stringify(errorResponse));
    }
    console.log(data);
  } catch (error) {
    const errorResponse = handleError('Error geting payment reference', error);
    throw new Error(JSON.stringify(errorResponse));
  }
};

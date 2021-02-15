/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTaller = /* GraphQL */ `
  mutation CreateTaller(
    $input: CreateTallerInput!
    $condition: ModelTallerConditionInput
  ) {
    createTaller(input: $input, condition: $condition) {
      id
      name
      direccion
      correo
      mision
      vision
      descripcionLaboral
      otro
      logo
      tecnicos {
        items {
          id
          name
          cargo
          tallerID
          createdAt
          updatedAt
        }
        nextToken
      }
      clientes {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
      }
      ofertasTrabajo {
        items {
          id
          tallerID
          titulo
          contenido
          fecha
          createdAt
          updatedAt
        }
        nextToken
      }
      telefonos {
        items {
          id
          numero
          descripcion
          tallerID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTaller = /* GraphQL */ `
  mutation UpdateTaller(
    $input: UpdateTallerInput!
    $condition: ModelTallerConditionInput
  ) {
    updateTaller(input: $input, condition: $condition) {
      id
      name
      direccion
      correo
      mision
      vision
      descripcionLaboral
      otro
      logo
      tecnicos {
        items {
          id
          name
          cargo
          tallerID
          createdAt
          updatedAt
        }
        nextToken
      }
      clientes {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
      }
      ofertasTrabajo {
        items {
          id
          tallerID
          titulo
          contenido
          fecha
          createdAt
          updatedAt
        }
        nextToken
      }
      telefonos {
        items {
          id
          numero
          descripcion
          tallerID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTaller = /* GraphQL */ `
  mutation DeleteTaller(
    $input: DeleteTallerInput!
    $condition: ModelTallerConditionInput
  ) {
    deleteTaller(input: $input, condition: $condition) {
      id
      name
      direccion
      correo
      mision
      vision
      descripcionLaboral
      otro
      logo
      tecnicos {
        items {
          id
          name
          cargo
          tallerID
          createdAt
          updatedAt
        }
        nextToken
      }
      clientes {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
      }
      ofertasTrabajo {
        items {
          id
          tallerID
          titulo
          contenido
          fecha
          createdAt
          updatedAt
        }
        nextToken
      }
      telefonos {
        items {
          id
          numero
          descripcion
          tallerID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTelefono = /* GraphQL */ `
  mutation CreateTelefono(
    $input: CreateTelefonoInput!
    $condition: ModelTelefonoConditionInput
  ) {
    createTelefono(input: $input, condition: $condition) {
      id
      numero
      descripcion
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTelefono = /* GraphQL */ `
  mutation UpdateTelefono(
    $input: UpdateTelefonoInput!
    $condition: ModelTelefonoConditionInput
  ) {
    updateTelefono(input: $input, condition: $condition) {
      id
      numero
      descripcion
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTelefono = /* GraphQL */ `
  mutation DeleteTelefono(
    $input: DeleteTelefonoInput!
    $condition: ModelTelefonoConditionInput
  ) {
    deleteTelefono(input: $input, condition: $condition) {
      id
      numero
      descripcion
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPiezas = /* GraphQL */ `
  mutation CreatePiezas(
    $input: CreatePiezasInput!
    $condition: ModelPiezasConditionInput
  ) {
    createPiezas(input: $input, condition: $condition) {
      id
      nombre
      precio
      cantidad
      createdAt
      updatedAt
    }
  }
`;
export const updatePiezas = /* GraphQL */ `
  mutation UpdatePiezas(
    $input: UpdatePiezasInput!
    $condition: ModelPiezasConditionInput
  ) {
    updatePiezas(input: $input, condition: $condition) {
      id
      nombre
      precio
      cantidad
      createdAt
      updatedAt
    }
  }
`;
export const deletePiezas = /* GraphQL */ `
  mutation DeletePiezas(
    $input: DeletePiezasInput!
    $condition: ModelPiezasConditionInput
  ) {
    deletePiezas(input: $input, condition: $condition) {
      id
      nombre
      precio
      cantidad
      createdAt
      updatedAt
    }
  }
`;
export const createTecnico = /* GraphQL */ `
  mutation CreateTecnico(
    $input: CreateTecnicoInput!
    $condition: ModelTecnicoConditionInput
  ) {
    createTecnico(input: $input, condition: $condition) {
      id
      name
      cargo
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      ordenServicio {
        items {
          id
          numero
          estado
          tecnicoID
          clienteID
          fechaDeFinalizado
          equipoID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTecnico = /* GraphQL */ `
  mutation UpdateTecnico(
    $input: UpdateTecnicoInput!
    $condition: ModelTecnicoConditionInput
  ) {
    updateTecnico(input: $input, condition: $condition) {
      id
      name
      cargo
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      ordenServicio {
        items {
          id
          numero
          estado
          tecnicoID
          clienteID
          fechaDeFinalizado
          equipoID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTecnico = /* GraphQL */ `
  mutation DeleteTecnico(
    $input: DeleteTecnicoInput!
    $condition: ModelTecnicoConditionInput
  ) {
    deleteTecnico(input: $input, condition: $condition) {
      id
      name
      cargo
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      ordenServicio {
        items {
          id
          numero
          estado
          tecnicoID
          clienteID
          fechaDeFinalizado
          equipoID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEquipo = /* GraphQL */ `
  mutation CreateEquipo(
    $input: CreateEquipoInput!
    $condition: ModelEquipoConditionInput
  ) {
    createEquipo(input: $input, condition: $condition) {
      id
      nombre
      descripcion
      clienteID
      cliente {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEquipo = /* GraphQL */ `
  mutation UpdateEquipo(
    $input: UpdateEquipoInput!
    $condition: ModelEquipoConditionInput
  ) {
    updateEquipo(input: $input, condition: $condition) {
      id
      nombre
      descripcion
      clienteID
      cliente {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEquipo = /* GraphQL */ `
  mutation DeleteEquipo(
    $input: DeleteEquipoInput!
    $condition: ModelEquipoConditionInput
  ) {
    deleteEquipo(input: $input, condition: $condition) {
      id
      nombre
      descripcion
      clienteID
      cliente {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCliente = /* GraphQL */ `
  mutation CreateCliente(
    $input: CreateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    createCliente(input: $input, condition: $condition) {
      id
      name
      numeroTelefono
      correo
      ordenServicio {
        items {
          id
          numero
          estado
          tecnicoID
          clienteID
          fechaDeFinalizado
          equipoID
          createdAt
          updatedAt
        }
        nextToken
      }
      equipo {
        items {
          id
          nombre
          descripcion
          clienteID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCliente = /* GraphQL */ `
  mutation UpdateCliente(
    $input: UpdateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    updateCliente(input: $input, condition: $condition) {
      id
      name
      numeroTelefono
      correo
      ordenServicio {
        items {
          id
          numero
          estado
          tecnicoID
          clienteID
          fechaDeFinalizado
          equipoID
          createdAt
          updatedAt
        }
        nextToken
      }
      equipo {
        items {
          id
          nombre
          descripcion
          clienteID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCliente = /* GraphQL */ `
  mutation DeleteCliente(
    $input: DeleteClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    deleteCliente(input: $input, condition: $condition) {
      id
      name
      numeroTelefono
      correo
      ordenServicio {
        items {
          id
          numero
          estado
          tecnicoID
          clienteID
          fechaDeFinalizado
          equipoID
          createdAt
          updatedAt
        }
        nextToken
      }
      equipo {
        items {
          id
          nombre
          descripcion
          clienteID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAspirante = /* GraphQL */ `
  mutation CreateAspirante(
    $input: CreateAspiranteInput!
    $condition: ModelAspiranteConditionInput
  ) {
    createAspirante(input: $input, condition: $condition) {
      id
      name
      numeroTelefono
      correo
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAspirante = /* GraphQL */ `
  mutation UpdateAspirante(
    $input: UpdateAspiranteInput!
    $condition: ModelAspiranteConditionInput
  ) {
    updateAspirante(input: $input, condition: $condition) {
      id
      name
      numeroTelefono
      correo
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAspirante = /* GraphQL */ `
  mutation DeleteAspirante(
    $input: DeleteAspiranteInput!
    $condition: ModelAspiranteConditionInput
  ) {
    deleteAspirante(input: $input, condition: $condition) {
      id
      name
      numeroTelefono
      correo
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOrdenServicio = /* GraphQL */ `
  mutation CreateOrdenServicio(
    $input: CreateOrdenServicioInput!
    $condition: ModelOrdenServicioConditionInput
  ) {
    createOrdenServicio(input: $input, condition: $condition) {
      id
      numero
      estado
      tecnicoID
      tecnico {
        id
        name
        cargo
        tallerID
        taller {
          id
          name
          direccion
          correo
          mision
          vision
          descripcionLaboral
          otro
          logo
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
        createdAt
        updatedAt
      }
      clienteID
      cliente {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
      }
      fechaDeFinalizado
      equipoID
      equipo {
        id
        nombre
        descripcion
        clienteID
        cliente {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      piezas {
        id
        nombre
        precio
        cantidad
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOrdenServicio = /* GraphQL */ `
  mutation UpdateOrdenServicio(
    $input: UpdateOrdenServicioInput!
    $condition: ModelOrdenServicioConditionInput
  ) {
    updateOrdenServicio(input: $input, condition: $condition) {
      id
      numero
      estado
      tecnicoID
      tecnico {
        id
        name
        cargo
        tallerID
        taller {
          id
          name
          direccion
          correo
          mision
          vision
          descripcionLaboral
          otro
          logo
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
        createdAt
        updatedAt
      }
      clienteID
      cliente {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
      }
      fechaDeFinalizado
      equipoID
      equipo {
        id
        nombre
        descripcion
        clienteID
        cliente {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      piezas {
        id
        nombre
        precio
        cantidad
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrdenServicio = /* GraphQL */ `
  mutation DeleteOrdenServicio(
    $input: DeleteOrdenServicioInput!
    $condition: ModelOrdenServicioConditionInput
  ) {
    deleteOrdenServicio(input: $input, condition: $condition) {
      id
      numero
      estado
      tecnicoID
      tecnico {
        id
        name
        cargo
        tallerID
        taller {
          id
          name
          direccion
          correo
          mision
          vision
          descripcionLaboral
          otro
          logo
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
        createdAt
        updatedAt
      }
      clienteID
      cliente {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
      }
      fechaDeFinalizado
      equipoID
      equipo {
        id
        nombre
        descripcion
        clienteID
        cliente {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      piezas {
        id
        nombre
        precio
        cantidad
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOfertasTrabajo = /* GraphQL */ `
  mutation CreateOfertasTrabajo(
    $input: CreateOfertasTrabajoInput!
    $condition: ModelOfertasTrabajoConditionInput
  ) {
    createOfertasTrabajo(input: $input, condition: $condition) {
      id
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      titulo
      contenido
      fecha
      createdAt
      updatedAt
    }
  }
`;
export const updateOfertasTrabajo = /* GraphQL */ `
  mutation UpdateOfertasTrabajo(
    $input: UpdateOfertasTrabajoInput!
    $condition: ModelOfertasTrabajoConditionInput
  ) {
    updateOfertasTrabajo(input: $input, condition: $condition) {
      id
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      titulo
      contenido
      fecha
      createdAt
      updatedAt
    }
  }
`;
export const deleteOfertasTrabajo = /* GraphQL */ `
  mutation DeleteOfertasTrabajo(
    $input: DeleteOfertasTrabajoInput!
    $condition: ModelOfertasTrabajoConditionInput
  ) {
    deleteOfertasTrabajo(input: $input, condition: $condition) {
      id
      tallerID
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      titulo
      contenido
      fecha
      createdAt
      updatedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      answer {
        items {
          id
          content
          username
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      username
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      answer {
        items {
          id
          content
          username
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      username
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      answer {
        items {
          id
          content
          username
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      username
      createdAt
      updatedAt
    }
  }
`;
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      content
      username
      postID
      post {
        id
        title
        content
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        answer {
          nextToken
        }
        username
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          answerID
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      content
      username
      postID
      post {
        id
        title
        content
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        answer {
          nextToken
        }
        username
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          answerID
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      content
      username
      postID
      post {
        id
        title
        content
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        answer {
          nextToken
        }
        username
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          answerID
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      answerID
      answer {
        id
        content
        username
        postID
        post {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      username
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      answerID
      answer {
        id
        content
        username
        postID
        post {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      username
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      answerID
      answer {
        id
        content
        username
        postID
        post {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      username
      createdAt
      updatedAt
    }
  }
`;

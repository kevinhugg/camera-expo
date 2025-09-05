// o componente Themedtext é uma extensão de texto padrão do React native
// Adicionando suporte a temas de cores e estilos de tipografia predefinidos

import { text, StyleSheet } from 'react-native';

// O usethemeColor é um ook personalizado que provavelmente determina a cor
// com base na cor do sistema (claro ou escuro)
import { useThemeColor } from '@/hooks/useThemeColor';

// Define o componente Themedtext
// Ele aceita varias props, incluindo estilo, cores para temas claro/escuro
// e um 'type' para estilos predefinidos
export function ThemedText({
    style, //estilo extra, que pode sobrescrever o estilo padrao
    lightColor, //Cor para o tema claro
    darkColor, //Cor para o tema escuro
    type='default', //tipo de estilo do texto, com 'default como padrão
    ...rest //coleta tadas as outras props, como 'children' (o texto em si), e as repassa para o componente <Text>
}) {
    //Usa o hoook para obter a cor do texto com base nas cores passadas e no tema atual
    //Se lightColor e darkColor não forem fornecidos, ele usa a cor padrão do 'text'
    const color= useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Text
        //Combina todos os estilos em um array. A ordem é importante para a sobreposição de estilos:
        //1. A cor dinâmica do tema
        //2. O estilo predefinido (ex: 'title', 'link') baseado no prop 'type'
        //3. O estilo extra passado pela prop 'style', que tem a maior prioridade
        style={[
            { color },
            type === 'default' ?  styles.default : undefined,
            type === 'title' ? styles.title : undefined,
            type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
            type === 'subtitle' ? styles.subtitle : undefined,
            type === 'link' ? styles.link : undefined,
            style,
        ]}
        //repassa as demais props para o componente text nativo
        ></Text>
    )
}
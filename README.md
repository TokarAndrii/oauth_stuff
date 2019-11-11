## Authentication

Authentication is about validating your credentials such as Username/User ID and password to verify your identity.
Usually authentication is done by a username and password, although there are other various ways to be authenticated.

Based on the security level, authentication factors can vary from one of the following:

- #### Single- Factor Authentication

  This is the simplest form of authentication method which requires a password to grant user access to a particular system such as a website or a network. The person can request access to the system using only one of the credentials to verify one’s identity. For example, only requiring a password against a username would be a way to verify a login credential using single- factor authentication.

- #### Two- Factor Authentication:

  This authentication requires a two- step verification process which not only requires a username and password, but also a piece of information only the user knows. Using a username and password along with a confidential information makes it that much harder for hackers to steal valuable and personal data.

- #### Multi- Factor Authentication:
  This is the most advanced method of authentication which requires two or more levels of security from independent categories of authentication to grant user access to the system. This form of authentication utilizes factors that are independent of each other in order to eliminate any data exposure. It is common for financial organizations, banks, and law enforcement agencies to use multiple- factor authentication.

## Authorization

Authorization occurs after your identity is successfully authenticated by the system, which therefore gives you full access to resources such as information, files, databases, funds, etc. However authorization verifies your rights to grant you access to resources only after determining your ability to access the system and up to what extent. In other words, authorization is the process to determine whether the authenticated user has access to the particular resources. A good example of this is, once verifying and confirming employee ID and passwords through authentication, the next step would be determining which employee has access to which floor and that is done through authorization.
Access to a system is protected by authentication and authorization, and they are frequently used in conjunction with each other. Although both have different concepts behind then, they are critical to the web service infrastructure, especially when it comes to being granted access to a system. Understanding each term is very important and a key aspect of security.

#### Resources:

- [medium authentication-vs-authorization](https://medium.com/datadriveninvestor/authentication-vs-authorization-716fea914d55)

- [stackoverflow authentication-versus-authorization](https://stackoverflow.com/questions/6556522/authentication-versus-authorization)

## Most used protocols:

- #### OAuth 2.0

  OAuth 2.0 is the industry-standard protocol for authorization. OAuth 2.0 supersedes the work done on the original OAuth protocol created in 2006.

  ### Roles

  OAuth defines four roles:

  resource owner
  An entity capable of granting access to a protected resource.
  When the resource owner is a person, it is referred to as an
  end-user.

  resource server
  The server hosting the protected resources, capable of accepting
  and responding to protected resource requests using access tokens.

  client
  An application making protected resource requests on behalf of the
  resource owner and with its authorization. The term "client" does
  not imply any particular implementation characteristics (e.g.,
  whether the application executes on a server, a desktop, or other
  devices).

  authorization server
  The server issuing access tokens to the client after successfully
  authenticating the resource owner and obtaining authorization.

  The interaction between the authorization server and resource server
  is beyond the scope of this specification. The authorization server
  may be the same server as the resource server or a separate entity.
  A single authorization server may issue access tokens accepted by
  multiple resource servers.

  ### Protocol Flow

  ```
   +--------+                               +---------------+
   |        |--(A)- Authorization Request ->|   Resource    |
   |        |                               |     Owner     |
   |        |<-(B)-- Authorization Grant ---|               |
   |        |                               +---------------+
   |        |
   |        |                               +---------------+
   |        |--(C)-- Authorization Grant -->| Authorization |
   | Client |                               |     Server    |
   |        |<-(D)----- Access Token -------|               |
   |        |                               +---------------+
   |        |
   |        |                               +---------------+
   |        |--(E)----- Access Token ------>|    Resource   |
   |        |                               |     Server    |
   |        |<-(F)--- Protected Resource ---|               |
   +--------+                               +---------------+
  ```

  [oauth](https://oauth.net/2/)

  ### Authorization Code

  The authorization code is obtained by using an authorization server
  as an intermediary between the client and resource owner. Instead of
  requesting authorization directly from the resource owner, the client
  directs the resource owner to an authorization server (via its
  user-agent as defined in [RFC2616]), which in turn directs the
  resource owner back to the client with the authorization code.

  Before directing the resource owner back to the client with the
  authorization code, the authorization server authenticates the
  resource owner and obtains authorization. Because the resource owner
  only authenticates with the authorization server, the resource
  owner's credentials are never shared with the client.

  The authorization code provides a few important security benefits,
  such as the ability to authenticate the client, as well as the
  transmission of the access token directly to the client without
  passing it through the resource owner's user-agent and potentially
  exposing it to others, including the resource owner.

  ### Implicit

  The implicit grant is a simplified authorization code flow optimized
  for clients implemented in a browser using a scripting language such
  as JavaScript. In the implicit flow, instead of issuing the client
  an authorization code, the client is issued an access token directly
  (as the result of the resource owner authorization). The grant type
  is implicit, as no intermediate credentials (such as an authorization
  code) are issued (and later used to obtain an access token).

  When issuing an access token during the implicit grant flow, the
  authorization server does not authenticate the client. In some
  cases, the client identity can be verified via the redirection URI
  used to deliver the access token to the client. The access token may
  be exposed to the resource owner or other applications with access to
  the resource owner's user-agent.

  Implicit grants improve the responsiveness and efficiency of some
  clients (such as a client implemented as an in-browser application),
  since it reduces the number of round trips required to obtain an
  access token. However, this convenience should be weighed against
  the security implications of using implicit grants, such as those
  described in Sections 10.3 and 10.16, especially when the
  authorization code grant type is available.

- #### OpenID

  OpenID allows you to use an existing account to sign in to multiple websites, without needing to create new passwords.
  With OpenID, your password is only given to your identity provider, and that provider then confirms your identity to the websites you visit. Other than your provider, no website ever sees your password, so you don’t need to worry about an unscrupulous or insecure website compromising your identity.

  [medium what-is-openid](https://medium.com/@piraveenaparalogarajah/what-is-openid-efe74e37b4d7)

- #### Security Assertion Markup Language (SAML)

  Security Assertion Markup Language (SAML) is an open standard that allows identity providers (IdP) to pass authorization credentials to service providers (SP). What that jargon means is that you can use one set of credentials to log into many different websites. It’s much simpler to manage one login per user than it is to manage separate logins to email, customer relationship management (CRM) software, Active Directory, etc.

  SAML transactions use Extensible Markup Language (XML) for standardized communications between the identity provider and service providers. SAML is the link between the authentication of a user’s identity and the authorization to use a service.

  SAML enables Single-Sign On (SSO), a term that means users can log in once, and those same credentials can be reused to log into other service providers.

  [auth0.com/docs](https://auth0.com/docs)

  [what-is-saml](https://www.varonis.com/blog/what-is-saml/)

  [is-the-oauth-implicit-flow-dead](https://developer.okta.com/blog/2019/05/01/is-the-oauth-implicit-flow-dead)

  [Which OAuth 2.0 Flow Should I Use?](https://auth0.com/docs/api-auth/which-oauth-flow-to-use)
